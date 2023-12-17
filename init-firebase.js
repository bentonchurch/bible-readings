// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
const initializeApp = require('firebase/app').initializeApp;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLOQq4eu8Z2Fo1JLafeeHulAteAx1uEp8",
  authDomain: "oneailbible.firebaseapp.com",
  projectId: "oneailbible",
  storageBucket: "oneailbible.appspot.com",
  messagingSenderId: "650394498154",
  appId: "1:650394498154:web:255a7ac1bbed002090c613"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);