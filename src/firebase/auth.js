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

// import { auth} from "./firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
//   sendEmailVerification,
//   updatePassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
// } from "firebase/auth";

// // 🔹 Create user with email/password
// export const doCreateUserWithEmailAndPassword = async (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// // 🔹 Sign in with email/password
// export const doSignInWithEmailAndPassword = (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

// // 🔹 Google sign-in
// export const doSignInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   const result = await signInWithPopup(auth, provider);
//   const user = result.user;
//   // Optionally: initialize a Firestore doc for the new user
//   return user;
// };

// // 🔹 Logout + clear local cache
// export const doSignOut = async () => {
//   // Clear local cache
//   localStorage.removeItem("cachedTransactionsData");
//   window.inMemoryCache = null;
//   console.log("🧹 Cache cleared on logout");
//   await signOut(auth);
// };

// // 🔹 Password reset, change, and email verification
// export const doPasswordReset = (email) => sendPasswordResetEmail(auth, email);
// export const doPasswordChange = (password) => updatePassword(auth.currentUser, password);
// export const doSendEmailVerification = () =>
//   sendEmailVerification(auth.currentUser, {
//     url: `${window.location.origin}/home`,
//   });

import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";

// ⏱ Auto logout after 12 hours (12 * 60 * 60 * 1000 ms)
const AUTO_LOGOUT_TIME = 12 * 60 * 60 * 1000;

/**
 * 🔹 Helper: Check if session expired
 */
const checkSessionExpiry = () => {
  const loginTime = parseInt(localStorage.getItem("loginTimestamp"), 10);
  if (!loginTime) return false;

  const now = Date.now();
  if (now - loginTime > AUTO_LOGOUT_TIME) {
    doSignOut(); // session expired → logout
    return true;
  }
  return false;
};

/**
 * 🔹 Store login timestamp
 */
const setLoginTimestamp = () => {
  localStorage.setItem("loginTimestamp", Date.now().toString());
};

/** 
 * 🔹 Create user with email/password
 */
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  await setPersistence(auth, browserLocalPersistence);
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  setLoginTimestamp();
  return userCredential;
};

/** 
 * 🔹 Sign in with email/password
 */
export const doSignInWithEmailAndPassword = async (email, password) => {
  await setPersistence(auth, browserLocalPersistence);
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  setLoginTimestamp();
  return userCredential;
};

/** 
 * 🔹 Sign in with Google
 */
export const doSignInWithGoogle = async () => {
  await setPersistence(auth, browserLocalPersistence);
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  setLoginTimestamp();
  return result.user;
};

/** 
 * 🔹 Logout + clear cache
 */
export const doSignOut = async () => {
  localStorage.removeItem("cachedTransactionsData");
  localStorage.removeItem("loginTimestamp");
  window.inMemoryCache = null;
  console.log("🧹 Cache cleared on logout");
  await signOut(auth);
};

/** 
 * 🔹 Password reset
 */
export const doPasswordReset = (email) => sendPasswordResetEmail(auth, email);

/** 
 * 🔹 Password change
 */
export const doPasswordChange = (password) => updatePassword(auth.currentUser, password);

/** 
 * 🔹 Send email verification
 */
export const doSendEmailVerification = () =>
  sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });

// ✅ Run session expiry check immediately on import
checkSessionExpiry();
