// function lastResult (heroName) {

// $('.list-group').append("<li class='list-group-item'>"+"You could be related to " + heroname +" </li>")
// }


var config = {
    apiKey: "AIzaSyBMxbRavlaUZpJQWiMiCoFuT1hT_un6iQ0",
    authDomain: "ballmer-peak-project1.firebaseapp.com",
    databaseURL: "https://ballmer-peak-project1.firebaseio.com",
    projectId: "ballmer-peak-project1",
    storageBucket: "",
    messagingSenderId: "520183238866"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();



$(document).ready(function(){
    $('collapseExample').click(function() {
        $('.list-group').append("<li class='list-group-item'>"+"You could be related to " + heroname +" </li>")
    });
});

