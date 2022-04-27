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

document.getElementById('login').addEventListener('click',(e) => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  signInWithEmailAndPassword(auth1, email, password)
  .then((userCredential) => {
    document.getElementById("successCheck").style.display = "block";
    
    setTimeout(() => {
      document.getElementById("successCheck").style.display = "none";
      document.getElementById("id01").style.display = "none";
      document.getElementById("errorMessage").innerHTML = "";
      document.getElementById("overlay").style.display = "none";
      document.getElementById("videoForOnClick").setAttribute('autoplay', 'true');
      document.getElementById("cameraID").setAttribute('camera', 'far: 10000'); 
    }, 1100);
  })
  .catch((error) => {
    document.getElementById("videoForOnClick").setAttribute('autoplay', 'false');
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("errorMessage").innerHTML = "email and/or password is incorrect";
  });
});