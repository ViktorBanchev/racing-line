// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdCXLKF4DV7ad0qs3Yp-7ZmL0_zgP2IBA",
  authDomain: "racing-line-project.firebaseapp.com",
  projectId: "racing-line-project",
  storageBucket: "racing-line-project.firebasestorage.app",
  messagingSenderId: "840787655838",
  appId: "1:840787655838:web:4f90748675a6732b268f8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);