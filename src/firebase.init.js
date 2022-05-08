// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyCtCZUUdtUAUah0EgNEzLvmJB4Yq5wEzK4",
    apiKey: `${process.env.API_KEY}`,
    authDomain: "buswala-8976c.firebaseapp.com",
    projectId: "buswala-8976c",
    storageBucket: "buswala-8976c.appspot.com",
    messagingSenderId: "50593202349",
    appId: "1:50593202349:web:32be0de8385a292ead4624"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;