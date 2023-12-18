// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD5RHRvGy91krBsBlpVUyOyOL2zq7t9u0s",
  authDomain: "blog-app-1866f.firebaseapp.com",
  projectId: "blog-app-1866f",
  storageBucket: "blog-app-1866f.appspot.com",
  messagingSenderId: "1011139878010",
  appId: "1:1011139878010:web:f9a324565a2f365aa7efc3",
  measurementId: "G-RV54PW1Z1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();