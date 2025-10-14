// import { auth } from "./firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
//   sendEmailVerification,
//   updatePassword,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";

// export const doCreateUserWithEmailAndPassword = async (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithEmailAndPassword = (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   const result = await signInWithPopup(auth, provider);
//   const user = result.user;

//   // add user to firestore
// };

// export const doSignOut = () => {
//   return auth.signOut();
// };

// export const doPasswordReset = (email) => {
//   return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser, password);
// };

// export const doSendEmailVerification = () => {
//   return sendEmailVerification(auth.currentUser, {
//     url: `${window.location.origin}/home`,
//   });
// };

import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// 🔹 Create user with email/password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// 🔹 Sign in with email/password
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// 🔹 Google sign-in
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  // Optionally: initialize a Firestore doc for the new user
  return user;
};

// 🔹 Logout + clear local cache
export const doSignOut = async () => {
  // Clear local cache
  localStorage.removeItem("cachedTransactionsData");
  window.inMemoryCache = null;
  console.log("🧹 Cache cleared on logout");
  await signOut(auth);
};

// 🔹 Password reset, change, and email verification
export const doPasswordReset = (email) => sendPasswordResetEmail(auth, email);
export const doPasswordChange = (password) => updatePassword(auth.currentUser, password);
export const doSendEmailVerification = () =>
  sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
