// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoufnzO7Q9OMGHKGsYwHfsEs5aJqUKa_c",
  authDomain: "dujemihaljevicvjezba4.firebaseapp.com",
  projectId: "dujemihaljevicvjezba4",
  storageBucket: "dujemihaljevicvjezba4.firebasestorage.app",
  messagingSenderId: "485445954144",
  appId: "1:485445954144:web:9cf3bb63b36cdc378a3105",
  measurementId: "G-3VK88F91C7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
