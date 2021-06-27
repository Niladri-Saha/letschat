//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            text:msg,
            name1:user_name,
            like:0
      });
      document.getElementById("msg").value="";     
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                         name1 = message_data['name1'];
                        message=message_data['text'];
                        like=message_data["like"];
                        name_with_tag="<h4>"+ name1 +"<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
                        like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
                        span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like :"+like+"</span></button><hr>";
                        row=name_with_tag+message_with_tag+like_button+span_with_tag;
                        document.getElementById("output").innerHTML+=row;
                        //End code
                  }
            });
      });
}
getData();