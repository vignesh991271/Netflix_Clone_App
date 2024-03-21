// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXM7ZLIuISfSzeG60c5kdc6R85Lkjv3jk",
  authDomain: "react-netflix-clone-80656.firebaseapp.com",
  projectId: "react-netflix-clone-80656",
  storageBucket: "react-netflix-clone-80656.appspot.com",
  messagingSenderId: "915223973762",
  appId: "1:915223973762:web:f9cefc91d68a2dbbab499b",
  measurementId: "G-SVNZ0LESRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);
