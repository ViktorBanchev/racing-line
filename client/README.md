# Racing Line (f1-hub)
### The ultimate F1 article hub. Built for speed, powered by community.

Racing Line is a **full-stack Formula 1 content platform** combining a modern React frontend with a custom backend (SoftUni Practice Server) deployed through **Firebase Cloud Functions**.
The project includes a rich-text editorial system, secure authentication, and real-time data persistence â€” all inside a single repository.

---

## Features

### Rich Article Reader
- Clean, optimized reading experience
- Secure rendering using **sanitized HTML**

### Integrated Editor
- Powerful **Tiptap** rich-text editor
- Supports images, formatting, and external links

### User Authentication
- Token-based login & registration
- Handled through internal server logic

### Responsive UI
- Mobile-first design
- Styled with **Tailwind CSS v4** and **Lucide icons**

### Full-Stack Architecture
- Frontend + Backend inside one repo
- Firebase Emulator Suite for local development

### Serverless Deployment
- Backend: Firebase Cloud Functions
- Frontend: Firebase Hosting

---

## Tech Stack

### Frontend
- React 19 + Vite
- Tailwind CSS v4 + Typography plugin
- React Router v7
- Tiptap (Headless WYSIWYG)
- DOMPurify
- UUID
- React Toastify

### Backend
- SoftUni Practice Server (serverless-adapted)
- Firebase Cloud Functions (Node.js)
- JSON persistence / Firestore (via server logic)

---

## Getting Started

This repository includes both **client and server code**.
You must run both locally for full functionality.

### Prerequisites
- Node.js (Latest LTS recommended)
- Firebase CLI

```bash
npm install -g firebase-tools
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/racing-line.git
cd racing-line
```

Install dependencies:

```bash
npm install
```

> If `/functions` contains its own `package.json`, run `npm install` inside it as well.

---

## Firebase Setup

Login to Firebase CLI:

```bash
firebase login
```

---

## Local Development

You need **two terminals** running in parallel.

### 1. Start the Backend
```bash
npm run server
```
- Runs: `firebase emulators:start --only functions`
- Wait for: **"All emulators ready"**

### 2. Start the Frontend
```bash
npm run dev
```
Open the app:
http://localhost:5173

---

## Scripts Overview

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server (frontend) |
| `npm run server` | Start Firebase Functions emulator (backend) |
| `npm run build` | Build production frontend |
| `npm run lint` | Run ESLint |
| `npm run deploy:client` | Deploy frontend to Firebase Hosting |
| `npm run deploy:server` | Deploy backend to Cloud Functions |

---

## Project Structure

```
src/
â”œâ”€â”€ components/      # Reusable UI components (Navbar, Cards)
â”œâ”€â”€ features/        # Feature modules (Editor, Auth)
â”œâ”€â”€ lib/             # API configuration
â”œâ”€â”€ pages/           # App pages (Home, ArticleView, Login)
â”œâ”€â”€ App.jsx          # Main routing component
â””â”€â”€ main.jsx         # Entry point

functions/
â”œâ”€â”€ index.js         # Backend / API logic (SoftUni Practice Server)
â””â”€â”€ ...
```

---

## API Reference

Backend is based on SoftUni Practice Server (see official documentation for endpoints & behavior).

---

## Contributing

1. Fork the repository
2. Create a branch:
```bash
git checkout -b feature/NewFeature
```
3. Commit your changes:
```bash
git commit -m "Add NewFeature"
```
4. Push the branch:
```bash
git push origin feature/NewFeature
```
5. Open a Pull Request