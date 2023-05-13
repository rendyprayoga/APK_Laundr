// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import 'firebase/compat/firestore';
import { getFirestore, setDoc, doc, addDoc, collection, getDoc } from "firebase/firestore";
import  {initializeApp} from "firebase/app"
import 'firebase/compat/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpwsOtCyO8DsbJWNmQg7HlW3ObWbPN0aE",
  authDomain: "auth-5200c.firebaseapp.com",
  projectId: "auth-5200c",
  storageBucket: "auth-5200c.appspot.com",
  messagingSenderId: "850632028490",
  appId: "1:850632028490:web:951053712c50944a1f51b3"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}
const apps = initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = getFirestore(apps)
export { auth };
export { firebase };
export { apps, db, getFirestore, doc, setDoc, addDoc, collection, getDoc };
