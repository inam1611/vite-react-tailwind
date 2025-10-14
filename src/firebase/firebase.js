// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLMo7GHQzzKzqCBEeV7NpOXypPl7SuJzY",
  authDomain: "my-project-f4615.firebaseapp.com",
  projectId: "my-project-f4615",
  storageBucket: "my-project-f4615.firebasestorage.app",
  messagingSenderId: "520166681529",
  appId: "1:520166681529:web:f7a1f3b55e0c984f9a2468",
  measurementId: "G-SD3Q97KEDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

