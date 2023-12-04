// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwehWryPRiH6W0WE3LhHAH_psasOQnCto",
    authDomain: "shoppiecommerce-47981.firebaseapp.com",
    projectId: "shoppiecommerce-47981",
    storageBucket: "shoppiecommerce-47981.appspot.com",
    messagingSenderId: "954855956591",
    appId: "1:954855956591:web:395ec0042dcaba4ba3ad9a",
    measurementId: "G-Y62X2LNHHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);