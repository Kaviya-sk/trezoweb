// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj_i5ERnmfbyAs2k4IYb38XyYS1bEXkFw",
  authDomain: "myecommerce-71a9d.firebaseapp.com",
  projectId: "myecommerce-71a9d",
  storageBucket: "myecommerce-71a9d.appspot.com",
  messagingSenderId: "609727564008",
  appId: "1:609727564008:web:a28cc9d78c9b088a22615d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);


export {fireDB, auth}




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries