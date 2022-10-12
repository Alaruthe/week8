// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE1124BHs7kKEFQK9zTkSbmySh5ctZnHs",
  authDomain: "f22-week7.firebaseapp.com",
  projectId: "f22-week7",
  storageBucket: "f22-week7.appspot.com",
  messagingSenderId: "823450911667",
  appId: "1:823450911667:web:1de21a452db9ab461ac1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };