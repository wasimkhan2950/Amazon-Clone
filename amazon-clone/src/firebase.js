import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyBiV09wDqsDN_KHPAj3RrPXge1LcS6e0U8",
  authDomain: "clone-a0b9b.firebaseapp.com",
  projectId: "clone-a0b9b",
  storageBucket: "clone-a0b9b.appspot.com",
  messagingSenderId: "411807434228",
  appId: "1:411807434228:web:c04a616a4b907db22065a1",
  measurementId: "G-BVCY21L1EX"
})

//const db= firebaseApp.firestore();
const auth=firebase.auth();

export{auth};