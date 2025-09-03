const express = require("express");
const multer = require("multer");
const nacl = require("tweetnacl");
const fs = require("fs");
const path = require("path");
const winston = require("winston");

const app = express();

// Serve static web files
app.use(express.static(path.join(__dirname, "../web")));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Logger setup with winston
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

const upload = multer({ dest: "uploads/" });

let signingKey = null;

// Generate new signing key
app.get("/gen-key", (req, res) => {
  const kp = nacl.sign.keyPair();
  signingKey = {
    publicKey: Buffer.from(kp.publicKey).toString("base64"),
    secretKey: Buffer.from(kp.secretKey).toString("base64"),
  };
  logger.info("Generated new signing key");
  res.json({ publicKey: signingKey.publicKey });
});

// Upload a file and sign manifest
app.post("/upload", upload.single("file"), (req, res) => {
  if (!signingKey) {
    logger.error("Attempted upload without signing key");
    return res.status(400).json({ error: "Generate key first" });
  }

  const manifest = {
    filename: req.file.originalname,
    storedAs: req.file.filename,
    uploadedAt: new Date().toISOString(),
  };

  const secretKey = Buffer.from(signingKey.secretKey, "base64");
  const manifestBytes = Buffer.from(JSON.stringify(manifest));
  const signature = nacl.sign.detached(manifestBytes, secretKey);
  const signatureBase64 = Buffer.from(signature).toString("base64");

  // Ensure uploads folder exists
  if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");

  fs.writeFileSync(
    path.join("uploads", req.file.filename + ".manifest.json"),
    JSON.stringify({ manifest, signature: signatureBase64 }, null, 2)
  );

  logger.info("File uploaded and manifest signed", { file: manifest.filename });
  res.json({ manifest, signature: signatureBase64 });
});

app.listen(3000, () => {
  console.log("VaultForge server running on http://localhost:3000");
  logger.info("Server started on port 3000");
});
