import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgCH8XbW0rBCLKJL4hg6WBoAK_an_UfAE",
  authDomain: "relu36-28aa2.firebaseapp.com",
  projectId: "relu36-28aa2",
  storageBucket: "relu36-28aa2.firebasestorage.app",
  messagingSenderId: "618892564273",
  appId: "1:618892564273:web:db852743e2420d9c67c210",
  measurementId: "G-K5HEY45151"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
