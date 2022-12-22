// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbamFDJpkC7CbnHZhhdc6p1IoqWeiuwQE",
  authDomain: "fir-feedback-33e4f.firebaseapp.com",
  projectId: "fir-feedback-33e4f",
  storageBucket: "fir-feedback-33e4f.appspot.com",
  messagingSenderId: "734293883429",
  appId: "1:734293883429:web:5f89f67376a78fc86b5dcc",
  measurementId: "G-FS6G8N3F8C",
};

// Initialize Firebase
// app = firebase.initializeApp(firebaseConfig);

// const db = getFirestore(app);
// export { db };

// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
