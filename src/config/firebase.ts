// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF6ktOdqQeQ38K-L351CRmxM78i-B79Yk",
  authDomain: "clima-app-2badc.firebaseapp.com",
  projectId: "clima-app-2badc",
  storageBucket: "clima-app-2badc.appspot.com",
  messagingSenderId: "555749104831",
  appId: "1:555749104831:web:e96b7e31b850a3c9efba0a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
