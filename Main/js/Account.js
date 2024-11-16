// Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    child, 
    get, 
    set, 
    update, 
    remove 
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';
const firebaseConfig = {
    apiKey: "AIzaSyAFVGHTaELA9fNWopoKARPJ4r9UXNfhVSI",
    authDomain: "giga-chad-1b5c3.firebaseapp.com",
    databaseURL: "https://giga-chad-1b5c3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "giga-chad-1b5c3",
    storageBucket: "giga-chad-1b5c3.firebasestorage.app",
    messagingSenderId: "968962042332",
    appId: "1:968962042332:web:ff17956b0e2b2f9b7e0719",
    measurementId: "G-YG70W999GY"
};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();