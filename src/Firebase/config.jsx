// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEhFCOTNWoUB6YWBx4LL1O8jNPH5bMzAg",
  authDomain: "ecommerce-reacjs-coder.firebaseapp.com",
  projectId: "ecommerce-reacjs-coder",
  storageBucket: "ecommerce-reacjs-coder.appspot.com",
  messagingSenderId: "116737228382",
  appId: "1:116737228382:web:ab9675345a9f32dfcabecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);