// Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { 
    getDatabase, 
    ref, 
    set,
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js';

// Config
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

//Functions
let username = document.getElementById("Username");
let email = document.getElementById("Email");
let password = document.getElementById("Password");
let confirm = document.getElementById("repeat");

let subBtn = document.getElementById("sub");

function addData() {
    if (username.value.trim() === "") {
        alert("Please type your username");
        return;
    }
    if (email.value.trim() == "") {
        alert("Please type your email");
        return;
    }
    if (password.value.trim() == "") {
        alert("Please type your password");
        return;
    }
    else if (confirm.value !== password.value) {
        alert("Your confirm password is incorrect");
        return;
    }
    set(ref(db, "UserSet/" + username.value), {
        username: String(username.value),
        email: email.value,
        password: String(password.value),
    })
    .then(() => {
        alert("Successfully added your data");
    })
    .catch((error) => {
        alert("ERROR: Can't add your data \n Please try again later");
        console.log(error);
    })
}

subBtn.addEventListener("click", addData);