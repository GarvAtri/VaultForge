# VaultForge - Secure Quantum-Resistant Vault

## Project Overview
- **Backend**: Node.js + Express + Multer 2.x
- **Frontend**: Simple HTML + JS for file upload and manifest verification
- **Security Features**:
  - Manifest signing with Ed25519
  - Audit & append-only logging
  - Base64 encoding via Node.js Buffer
- **Folders**:
  - api/: backend server
  - web/: client UI
  - uploads/: stored encrypted files
  - logs/: audit logs
