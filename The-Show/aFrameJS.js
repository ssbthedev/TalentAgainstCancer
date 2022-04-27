import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import {getDatabase, ref, set, push, get, child, update } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoL6G_6Yz9mtEGtPAq_mYpE52q-ySrjk8",
  authDomain: "votes-d9302.firebaseapp.com",
  databaseURL: "https://votes-d9302-default-rtdb.firebaseio.com",
  projectId: "votes-d9302",
  storageBucket: "votes-d9302.appspot.com",
  messagingSenderId: "471212602194",
  appId: "1:471212602194:web:6ba7ea5d8b327caf7fc08b",
  measurementId: "G-1RC6S7FSL1"
};

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
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// ----------------------------------------------------------

var numOfVotes;
var smVotes;
var kpVotes;
var akVotes;
var sbVotes;
var cplVotes;
var usernameOfUser;
var userCounts = 0;
var password;
var counter = -1;
var a;
var b;

document.getElementById('login').addEventListener('click',(e) => {
  usernameOfUser = document.getElementById("email").value;
  password = document.getElementById("password").value;
  // console.log("LMAO" + usernameOfUser);

  // get(child(dbRef,'/usersWhoVoted/')).then((snapshot) => {
  //   if(snapshot.hasChild(usernameOfUser)){
  //     console.log("exists");
  //   }
  // });
});

const dbRef = ref(getDatabase());

get(child(dbRef,'/votingSystem/')).then((snapshot) => {
  if(snapshot.exists()){
    numOfVotes = snapshot.val().totalVotes;
    smVotes = snapshot.val().saVotes;
    kpVotes = snapshot.val().kVotes;
    akVotes = snapshot.val().alVotes;
    sbVotes = snapshot.val().suVotes;
    cplVotes = snapshot.val().caVotes;
    
    // ---------------------------------------------------
  
      document.getElementById("smNumOfVotes").innerHTML = Math.round((smVotes/numOfVotes) * 100) + "% (" + smVotes + " votes)";
      document.getElementById("smNumOfVotes").style.backgroundColor = "green";
      document.getElementById("smNumOfVotes").style.width = Math.round((smVotes/numOfVotes) * 800);
    
      // -----------------------------------------------------
      
      document.getElementById("kpNumOfVotes").innerHTML = Math.round((kpVotes/numOfVotes) * 100) + "% (" + kpVotes + " votes)";
      document.getElementById("kpNumOfVotes").style.backgroundColor = "green";
      document.getElementById("kpNumOfVotes").style.width = Math.round((kpVotes/numOfVotes) * 800);
    
      // -----------------------------------------------------
    
      document.getElementById("akNumOfVotes").innerHTML = Math.round((akVotes/numOfVotes) * 100) + "% (" + akVotes + " votes)";
      document.getElementById("akNumOfVotes").style.backgroundColor = "green";
      document.getElementById("akNumOfVotes").style.width = Math.round((akVotes/numOfVotes) * 800);
    
      // -----------------------------------------------------
      
      document.getElementById("sbNumOfVotes").innerHTML = Math.round((sbVotes/numOfVotes) * 100) + "% (" + sbVotes + " votes)";
      document.getElementById("sbNumOfVotes").style.backgroundColor = "green";
      document.getElementById("sbNumOfVotes").style.width = Math.round((sbVotes/numOfVotes) * 800);
    
      // -----------------------------------------------------
    
      document.getElementById("cplNumOfVotes").innerHTML = Math.round((cplVotes/numOfVotes) * 100) + "% (" + cplVotes + " votes)";
      document.getElementById("cplNumOfVotes").style.backgroundColor = "green";
      document.getElementById("cplNumOfVotes").style.width = Math.round((cplVotes/numOfVotes) * 800);

    // ---------------------------------------------------

    document.getElementById('sm').addEventListener('click',(e) => {

      signInWithEmailAndPassword(auth1, usernameOfUser, password)
      .then((userCredential) => {
        set(push(ref(getDatabase(), 'usersWhoVoted/')),{
          emailOfUser: usernameOfUser
        });
      })
      .catch((error) => {
        console.log("error")
      });

      get(child(dbRef, 'usersWhoVoted')).then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          console.log("DB: " + childSnapshot.val().emailOfUser);
          console.log("LOCAL: " + usernameOfUser);

          a = childSnapshot.val().emailOfUser;
          b = usernameOfUser;

          if((a == b) == false){
            counter++;
          }
          
        });
      });
      
      userCounts++;
  
      if(userCounts <= 1){
        smVotes++;
        vote();
      }
    });
    
    document.getElementById('kp').addEventListener('click',(e) => {
      signInWithEmailAndPassword(auth1, usernameOfUser, password)
      .then((userCredential) => {
        set(push(ref(getDatabase(), 'usersWhoVoted/')),{
          emailOfUser: usernameOfUser
        });
      })
      .catch((error) => {
        console.log("error")
      });
      userCounts++;
  
      if(userCounts <= 1){
        kpVotes++;
        vote();
      }
    });
    
    document.getElementById('ak').addEventListener('click',(e) => {
      signInWithEmailAndPassword(auth1, usernameOfUser, password)
      .then((userCredential) => {
        set(push(ref(getDatabase(), 'usersWhoVoted/')),{
          emailOfUser: usernameOfUser
        });
      })
      .catch((error) => {
        console.log("error")
      });
      userCounts++;
  
      if(userCounts <= 1){
        akVotes++;
        vote();
      }
    });
    
    document.getElementById('sb').addEventListener('click',(e) => {
      signInWithEmailAndPassword(auth1, usernameOfUser, password)
      .then((userCredential) => {
        set(push(ref(getDatabase(), 'usersWhoVoted/')),{
          emailOfUser: usernameOfUser
        });
      })
      .catch((error) => {
        console.log("error")
      });
      userCounts++;
  
      if(userCounts <= 1){
        sbVotes++;
        vote();
      }
    });
    
    document.getElementById('cpl').addEventListener('click',(e) => {
      signInWithEmailAndPassword(auth1, usernameOfUser, password)
      .then((userCredential) => {
        set(push(ref(getDatabase(), 'usersWhoVoted/')),{
          emailOfUser: usernameOfUser
        });
      })
      .catch((error) => {
        console.log("error")
      });
      userCounts++;
  
      if(userCounts <= 1){
        cplVotes++;
        vote();
      }
    });

    
    function vote(){
      numOfVotes++;
    
      set(ref(getDatabase(), 'votingSystem/'),{
        totalVotes: numOfVotes,
        saVotes: smVotes,
        kVotes: kpVotes,
        alVotes: akVotes,
        suVotes: sbVotes,
        caVotes: cplVotes,
      });
    
      document.getElementById("smNumOfVotes").innerHTML = Math.round((smVotes/numOfVotes) * 100) + "% (" + smVotes + " votes)";
      document.getElementById("smNumOfVotes").style.backgroundColor = "green";
      document.getElementById("smNumOfVotes").style.width = Math.round((smVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
      
      document.getElementById("kpNumOfVotes").innerHTML = Math.round((kpVotes/numOfVotes) * 100) + "% (" + kpVotes + " votes)";
      document.getElementById("kpNumOfVotes").style.backgroundColor = "green";
      document.getElementById("kpNumOfVotes").style.width = Math.round((kpVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
    
      document.getElementById("akNumOfVotes").innerHTML = Math.round((akVotes/numOfVotes) * 100) + "% (" + akVotes + " votes)";
      document.getElementById("akNumOfVotes").style.backgroundColor = "green";
      document.getElementById("akNumOfVotes").style.width = Math.round((akVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
      
      document.getElementById("sbNumOfVotes").innerHTML = Math.round((sbVotes/numOfVotes) * 100) + "% (" + sbVotes + " votes)";
      document.getElementById("sbNumOfVotes").style.backgroundColor = "green";
      document.getElementById("sbNumOfVotes").style.width = Math.round((sbVotes/numOfVotes) * 500);
    
      // -----------------------------------------------------
    
      document.getElementById("cplNumOfVotes").innerHTML = Math.round((cplVotes/numOfVotes) * 100) + "% (" + cplVotes + " votes)";
      document.getElementById("cplNumOfVotes").style.backgroundColor = "green";
      document.getElementById("cplNumOfVotes").style.width = Math.round((cplVotes/numOfVotes) * 500);
    }
  }else{
    console.log("add data pls");
  }
});

// ---------------------------------------------------

var count = 0;

window.onload=function(){
let zoom = document.getElementById("videoForOnClick");
zoom.addEventListener('click', zoomInVideo);  
}

function zoomInVideo(){
  ++count;
  if(count % 2 == 0){
    document.getElementById("cameraID").setAttribute('position', '0 0.97227 0.42759'); //original
  }else{
    document.getElementById("cameraID").setAttribute('position', '0 1.2 -2'); //zoomed in  
  }
}