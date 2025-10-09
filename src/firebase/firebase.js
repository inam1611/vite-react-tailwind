import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLMo7GHQzzKzqCBEeV7NpOXypPl7SuJzY",
  authDomain: "my-project-f4615.firebaseapp.com",
  projectId: "my-project-f4615",
  storageBucket: "my-project-f4615.firebasestorage.app",
  messagingSenderId: "520166681529",
  appId: "1:520166681529:web:f7a1f3b55e0c984f9a2468",
  measurementId: "G-SD3Q97KEDK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };


