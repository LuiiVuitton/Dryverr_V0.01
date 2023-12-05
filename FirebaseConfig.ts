// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiTsXMJ3ckgrEE4DvJxZeK6oMhUvGCr8g",
  authDomain: "dryverr-c4e51.firebaseapp.com",
  projectId: "dryverr-c4e51",
  storageBucket: "dryverr-c4e51.appspot.com",
  messagingSenderId: "870831743543",
  appId: "1:870831743543:web:8636e897b59478f22015b2",
  measurementId: "G-YVBMVMT1VK",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

const analytics = getAnalytics(FIREBASE_APP);
