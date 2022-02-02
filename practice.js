
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXSFfglUBXByqcewJKo11m0oGi6myF_yI",
    authDomain: "c94practice-c73e8.firebaseapp.com",
    databaseURL: "https://c94practice-c73e8-default-rtdb.firebaseio.com",
    projectId: "c94practice-c73e8",
    storageBucket: "c94practice-c73e8.appspot.com",
    messagingSenderId: "121340384554",
    appId: "1:121340384554:web:8ba6d16adee41b6073ba53"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function addUser() {
     user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose : "adding user"
     });
 }