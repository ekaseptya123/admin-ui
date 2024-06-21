import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-ui-b3ffe.firebaseapp.com",
  projectId: "admin-ui-b3ffe",
  storageBucket: "admin-ui-b3ffe.appspot.com",
  messagingSenderId: "709775488202",
  appId: "1:709775488202:web:8414666b019c3c27a57033"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);