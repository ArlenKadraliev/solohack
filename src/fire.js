import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_nkm3uQRhTvKATX_A5TxCEZNmNsem1d0",
  authDomain: "riese-1e45a.firebaseapp.com",
  projectId: "riese-1e45a",
  storageBucket: "riese-1e45a.appspot.com",
  messagingSenderId: "396705149207",
  appId: "1:396705149207:web:d970ad5e7f1552b09a8752",
  measurementId: "G-HXW8BL6EPJ",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
