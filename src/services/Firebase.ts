import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBknBq55s9W5oxs6cAZU9QRYFDjiT23cB4",
  authDomain: "mealstogo-d18d2.firebaseapp.com",
  projectId: "mealstogo-d18d2",
  storageBucket: "mealstogo-d18d2.firebasestorage.app",
  messagingSenderId: "424357875339",
  appId: "1:424357875339:web:5d47e8e56e27be443d4e8e",
};
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
