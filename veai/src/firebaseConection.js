import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBNT9EK5wN0rJhQnpH-NCHD6n1SANo5Yoc",
  authDomain: "ve-ai-5ef3f.firebaseapp.com",
  projectId: "ve-ai-5ef3f",
  storageBucket: "ve-ai-5ef3f.appspot.com",
  messagingSenderId: "207180752773",
  appId: "1:207180752773:web:98550dbc03f17ddab706ec",
  measurementId: "G-F93BERQBRF"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };