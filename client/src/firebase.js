// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realtor-20551.firebaseapp.com",
  projectId: "realtor-20551",
  storageBucket: "realtor-20551.appspot.com",
  messagingSenderId: "19704100728",
  appId: "1:19704100728:web:6829d4c49a244273c1fa8d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);