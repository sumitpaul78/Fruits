// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyDLqUQCj0mGyQnvkchuIIORueA9uYOJ0LI",
  authDomain: "react-project-78.firebaseapp.com",
  projectId: "react-project-78",
  storageBucket: "react-project-78.appspot.com", 
  messagingSenderId: "715201206656",
  appId: "1:715201206656:web:5b2e9f198476b7fb7f4965",
  measurementId: "G-TXWHQGB3TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // ✅ Initialize storage

// ✅ Export storage too
export { fireDB, auth, app, storage };
