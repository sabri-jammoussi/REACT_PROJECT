// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyKLhQ4hpzy7Iau5R2yQIWD0E92dv3ODc",
  authDomain: "reaactproject2.firebaseapp.com",
  projectId: "reaactproject2",
  storageBucket: "reaactproject2.appspot.com",
  messagingSenderId: "820619569333",
  appId: "1:820619569333:web:fcdb4491f6e5402ae9f6fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage=getStorage(app);
export default storage;