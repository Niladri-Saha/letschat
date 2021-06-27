var firebaseConfig = {
      apiKey: "AIzaSyDMAllTYf2wLyPToDje4atZ0Cx3mshYrYU",
      authDomain: "kwitter-e8855.firebaseapp.com",
      databaseURL: "https://kwitter-e8855-default-rtdb.firebaseio.com",
      projectId: "kwitter-e8855",
      storageBucket: "kwitter-e8855.appspot.com",
      messagingSenderId: "952954387501",
      appId: "1:952954387501:web:29c5028e159ffcb1864ca4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS 
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom() {
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", Room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room_names" + Room_names);
                  //Start code
                  row = "<div class='room_name' id= " + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}