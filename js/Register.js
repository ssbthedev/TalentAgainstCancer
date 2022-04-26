// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const otherApp = initializeApp({
  apiKey: "AIzaSyBSB40LK73lnqBwUFO4xSAZ4dK834h_7ek",
  authDomain: "web-authentication-149d3.firebaseapp.com",
  projectId: "web-authentication-149d3",
  storageBucket: "web-authentication-149d3.appspot.com",
  messagingSenderId: "540200032044",
  appId: "1:540200032044:web:7c639769239320d7f43e89",
  measurementId: "G-9YNWMWFL19"
}, "otherApp");



// const app1 = initializeApp(firebaseConfig1);
const auth1 = getAuth(otherApp);

// Initialize Firebase


const element = document.getElementById("btn");
element.addEventListener("click", signUp);

function signUp(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth1, email, password)
  .then((userCredential) => {
    // Signed in 

    if(document.getElementById('name-field') != "" && document.getElementById('ccNum') != "" && document.getElementById('expirationdate1') != "" && document.getElementById('sCode') != "" && document.getElementById('donate') != "" && document.getElementById('email') != "" && document.getElementById('password') != ""){
      // const user = userCredential.user;
      document.getElementById("successCheck1").style.display = "block";
      
      setTimeout(() => {
        document.getElementById("successCheck1").style.display = "none";
      }, 1100);
  
      
  document.getElementById('name-field') = ""; 
  document.getElementById('ccNum') = "";
  document.getElementById('sCode') = "";
  document.getElementById('donate') = "";
  document.getElementById('email') = "";
  document.getElementById('password') = "";
  document.getElementById('expirationdate1') = "";

    }else{
      document.getElementById("errorMessageLogin").innerHTML = "please enter information for all fields";
    }
    
    // ...
  })
  .catch((error) => {
    document.getElementById("errorMessageLogin").innerHTML = "please enter a valid email that DOES NOT already have an account created and/or a password with at least 6 characters";
  });
}



