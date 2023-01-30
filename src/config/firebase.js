// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFLePhPs5j9qGtY6jK18kTKnu1r6T0JFk",
  authDomain: "reactsocialmediaapp-26942.firebaseapp.com",
  projectId: "reactsocialmediaapp-26942",
  storageBucket: "reactsocialmediaapp-26942.appspot.com",
  messagingSenderId: "1024009890057",
  appId: "1:1024009890057:web:bb18f454e20e803086cbd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();