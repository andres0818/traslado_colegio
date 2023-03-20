import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKBv0bKmKedcj1k-I5t4NPaC1a3L_0fOU",
  authDomain: "tras-b5834.firebaseapp.com",
  projectId: "tras-b5834",
  storageBucket: "tras-b5834.appspot.com",
  messagingSenderId: "43875461360",
  appId: "1:43875461360:web:cad3ad713d5982383cfa35",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
