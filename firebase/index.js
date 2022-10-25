// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKUqsr5ZmN6-BYa-HwjEodghOVpoqcq_c",
  authDomain: "week9-10-eef8d.firebaseapp.com",
  projectId: "week9-10-eef8d",
  storageBucket: "week9-10-eef8d.appspot.com",
  messagingSenderId: "311110253754",
  appId: "1:311110253754:web:26608b329338e437bb9683",
  measurementId: "G-95EYEJVQVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };