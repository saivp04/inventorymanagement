// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDpnNU4AcC7lnhd0UHdBcyDt4Z3lINhsA",
  authDomain: "inventorymanagement2-65734.firebaseapp.com",
  projectId: "inventorymanagement2-65734",
  storageBucket: "inventorymanagement2-65734.appspot.com",
  messagingSenderId: "878213935877",
  appId: "1:878213935877:web:035c4cd119cb49ab37fd6c",
  measurementId: "G-CS2L7QWWKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore }
