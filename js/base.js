// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref,  set } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKHSE-x2DPZRr5AeOUSazeTYhmQQGAkCU",
  authDomain: "donations-8040b.firebaseapp.com",
  databaseURL: "https://donations-8040b-default-rtdb.firebaseio.com",
  projectId: "donations-8040b",
  storageBucket: "donations-8040b.appspot.com",
  messagingSenderId: "1087658948497",
  appId: "1:1087658948497:web:b3ceed210500a3c76d8c30",
  measurementId: "G-T52X65SHX1"
};

//Popup 
function confirmationPopup() {
  var popup = document.getElementById("confirm-popup");
  popup.classList.toggle("show");
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAuth(app);

const button = document.getElementById("btn");
button.addEventListener('click', (e)  =>  {
  e.preventDefault();
  const don = document.getElementById("donate");
  const data = getDatabase();
  
  set(ref(data, 'amount: ' + don.value), {
    amount: don.value
  });
  confirmationPopup();
});