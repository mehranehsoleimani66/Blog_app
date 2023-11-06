import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-75982.firebaseapp.com",
  projectId: "blog-75982",
  storageBucket: "blog-75982.appspot.com",
  messagingSenderId: "1029397029842",
  appId: "1:1029397029842:web:5ebbc9bcf2ebf67dc51e0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
