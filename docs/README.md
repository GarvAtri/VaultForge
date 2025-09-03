# VaultForge – Secure File Storage System

**VaultForge** is a modern, web-based file storage platform designed to provide **highly secure file management**, aiming to become the world’s most secure system. It demonstrates industry-standard security practices, cryptographic integrity checks, audit logging, and a polished web interface.  

---

## Key Features

- **File Upload with Manifest Signing**  
  Each uploaded file is accompanied by a signed manifest using cryptographic signatures to ensure metadata integrity.  

- **Audit Logging**  
  Server activities, such as key generation and file uploads, are logged using `winston` for traceability and accountability.  

- **Extensible Architecture**  
  Designed to support advanced security features in the future:  
  - End-to-end encryption  
  - File integrity verification  
  - Quantum-resistant signature options  

- **Modern Web Interface**  
  Clean, intuitive UI with responsive design, progress feedback, and clear upload status.

---

## Tech Stack & Security Highlights

**Backend & Frontend:**
- Node.js, Express.js
- Modern JavaScript, HTML5, CSS3
- Future cloud integration: AWS S3 with object-lock for immutable storage

**Cryptography & Security:**
- Digital Signatures: Ed25519 (via TweetNaCl) for cryptographically signed manifests
- Hashing: SHA-256 for file and manifest integrity verification
- Quantum-Resistant Signatures: NaCl-based, future-proof against post-quantum attacks
- Encryption:
  - HTTPS/TLS 1.3 for data in transit
  - End-to-end encryption for future-proofing
- Access Control: Role-Based Access Control (RBAC) for user isolation
- Audit & Logging: Winston-based logs for uploads/downloads with timestamps
- Integrity Verification: Detached signature manifests for tamper-proof validation

**Additional Security Practices:**
- Isolated per-user storage paths
- Secure key generation and management
- Planned AWS S3 object-lock to prevent overwrites/deletion
- Forward-looking architecture designed for enterprise-grade compliance

---

## Installation & Usage

1. **Clone the repository**
```bash
git clone https://github.com/GarvAtri/VaultForge.git
cd VaultForge
