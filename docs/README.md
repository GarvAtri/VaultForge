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

## Technology Stack

- **Backend:** Node.js, Express, Multer, TweetNaCl, Winston  
- **Frontend:** HTML, CSS, JavaScript (ES Modules)  

---

## Installation & Usage

1. **Clone the repository**
```bash
git clone https://github.com/GarvAtri/VaultForge.git
cd VaultForge
