//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyANb3dzZfUmUOP-iUVQkS60lCMRyw4I9Lk",
    authDomain: "kwitter-99350.firebaseapp.com",
    databaseURL: "https://kwitter-99350-default-rtdb.firebaseio.com",
    projectId: "kwitter-99350",
    storageBucket: "kwitter-99350.appspot.com",
    messagingSenderId: "583937094444",
    appId: "1:583937094444:web:34f626f0e5da2915e2b289",
    measurementId: "G-RTCK039QWS"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    room_names = childKey;
   //Start code
   console.log("Room Name - " + room_names);
   row="<div class='room_name' id=" + room_names + "onclick='redirectToRoomName(this.id)'>#" + room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();
user_name=localStorage.getItem("user_name");
// document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "add room name"
  });
    localStorage.setItem("room_name", room_name);

    window.location="kwitter_page.html";
};
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
