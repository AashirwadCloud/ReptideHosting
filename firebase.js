// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, doc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
export const db = getFirestore(app);
