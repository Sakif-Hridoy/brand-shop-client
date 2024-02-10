// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfiGPXzPWPzSkLHODiaILWF0b2_LQGYqs",
  authDomain: "tech-world-ca0db.firebaseapp.com",
  projectId: "tech-world-ca0db",
  storageBucket: "tech-world-ca0db.appspot.com",
  messagingSenderId: "626050351023",
  appId: "1:626050351023:web:3e2c4b4fdcdbe1834f395a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app