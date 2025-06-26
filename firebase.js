// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDJgEb2uCYOTfACJRr4ni-TPLdocP4pxk",
  authDomain: "data-5f291.firebaseapp.com",
  projectId: "data-5f291",
  storageBucket: "data-5f291.appspot.com",
  messagingSenderId: "397689315534",
  appId: "1:397689315534:web:88980e22fd9b4c8456f09f",
  measurementId: "G-2X20MH4M4B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
