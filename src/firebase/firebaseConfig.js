// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsN24hToXuE52DR31UiH0eau-wPVl_9pc",
  authDomain: "ecommerce-8b637.firebaseapp.com",
  projectId: "ecommerce-8b637",
  storageBucket: "ecommerce-8b637.appspot.com",
  messagingSenderId: "1015857269000",
  appId: "1:1015857269000:web:cb3e43f4143a67a411c4bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    
  return app

}