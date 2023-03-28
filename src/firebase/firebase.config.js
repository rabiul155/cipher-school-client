// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBU8vNDcaA0qV9pFLxp_oBtjf-HLqYh7bU",
    authDomain: "cipher-schools.firebaseapp.com",
    projectId: "cipher-schools",
    storageBucket: "cipher-schools.appspot.com",
    messagingSenderId: "852115962974",
    appId: "1:852115962974:web:27572d1d367885232b88cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;