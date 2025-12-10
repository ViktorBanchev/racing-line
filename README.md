# 🏎️ Racing Line (f1-hub)

> The ultimate F1 article hub. Built for speed, powered by community.

**Racing Line** is a full-stack Formula 1 content platform. It combines a modern React frontend with a custom backend (SoftUni Practice Server) hosted via Firebase Cloud Functions. The project includes a rich-text editorial interface, secure authentication, and real-time data persistence—all contained within a single repository.

## ✨ Features

* **📰 Rich Article Reader:** Seamless reading experience with sanitized HTML rendering.
* **✍️ Integrated Editor:** Powerful rich-text editor (powered by Tiptap) for writing articles with image and link support.
* **🔐 User Authentication:** Token-based login and registration (handled by the internal server).
* **📱 Responsive UI:** Mobile-first design using Tailwind CSS v4 and Lucide icons.
* **⚡ Full-Stack Architecture:** Frontend and Backend live together, utilizing Firebase Emulators for local development.
* **☁️ Serverless Deployment:** Deploys backend logic to Firebase Cloud Functions and frontend to Firebase Hosting.

## 🛠️ Tech Stack

### Frontend
* **Core:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + Typography Plugin
* **Routing:** React Router v7
* **Editor:** [Tiptap](https://tiptap.dev/) (Headless WYSIWYG)
* **Utilities:** DOMPurify, UUID, React Toastify

### Backend
* **Server Logic:** [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server) (Adapted for Serverless)
* **Runtime:** Firebase Cloud Functions (Node.js)
* **Database:** JSON Persistence / Firestore (via Server logic)

## 🚀 Getting Started

This project acts as a monorepo containing both client and server code. You need to run both locally for the app to work.

### Prerequisites

* Node.js (Latest LTS recommended)
* Firebase CLI (Required for the server emulator)
  ```bash
  npm install -g firebase-tools

Installation
 * Clone the repository
   git clone [https://github.com/your-username/racing-line.git](https://github.com/your-username/racing-line.git)
cd racing-line

 * Install dependencies
   npm install

   (Note: If the functions folder has a separate package.json, you may need to run npm install inside that folder as well).
 * Firebase Setup
   Ensure you are logged into the Firebase CLI so the emulators can start.
   firebase login

💻 Usage
To develop locally, you will need two terminal windows running simultaneously.
1. Start the Backend (Server)
In your first terminal, start the Firebase Function emulator. This serves the API.
npm run server

 * What it does: Runs firebase emulators:start --only functions.
 * Status: Wait until the terminal says "All emulators ready".
2. Start the Frontend (Client)
In your second terminal, start the React application.
npm run dev

 * What it does: Runs vite.
 * Access: Open http://localhost:5173 in your browser.
📜 Scripts Explained
 * npm run dev: Starts the Vite development server for the React frontend.
 * npm run server: Starts the Firebase Local Emulator Suite (Functions only) to host the backend API locally.
 * npm run build: Compiles the React app into static files for production.
 * npm run lint: Runs ESLint to check for code quality issues.
 * npm run deploy:client: Builds the React app and deploys it to Firebase Hosting.
 * npm run deploy:server: Deploys the backend code to Firebase Cloud Functions.
📂 Project Structure
src/
├── components/     # UI Components (Navbar, Cards)
├── features/       # Feature-based modules (Editor, Auth)
├── lib/            # API Service configuration
├── pages/          # Application pages (Home, ArticleView, Login)
├── App.jsx         # Main component with Routes
└── main.jsx        # Entry point

functions/          # Backend Server Code
    ├── index.js    # Server entry point (SoftUni Practice Server logic)
    └── ...

📚 API Reference
The backend logic is based on the SoftUni Practice Server.
 * Documentation: SoftUni Practice Server GitHub
🤝 Contributing
 * Fork the Project
 * Create your Feature Branch (git checkout -b feature/NewFeature)
 * Commit your Changes (git commit -m 'Add some NewFeature')
 * Push to the Branch (git push origin feature/NewFeature)
 * Open a Pull Request
<!-- end list -->

