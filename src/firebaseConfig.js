// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn1738_I1zcaSPrwx7mk0DNfYk9gOAw2Q",
  authDomain: "weekly-calendar-0.firebaseapp.com",
  projectId: "weekly-calendar-0",
  storageBucket: "weekly-calendar-0.appspot.com",
  messagingSenderId: "347351570598",
  appId: "1:347351570598:web:f58956e806ba53c554fc67",
  measurementId: "G-9D8GK9CQ34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//const db = getFirestore(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };