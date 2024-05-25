// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lafafsa.firebaseapp.com",
  projectId: "lafafsa",
  storageBucket: "lafafsa.appspot.com",
  messagingSenderId: "405817838320",
  appId: "1:405817838320:web:5630bf1526b8e933bb5035",
  measurementId: "G-XSZ17R7NRE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const analytics = getAnalytics(app);

export { database };
