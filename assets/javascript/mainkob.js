// function jupload()
// {
//     $(".imageholder").append('<img src="./images/loading.gif">');
// }

function juploadstop(result)
{
    if(result==0)
    {
        $(".imageholder").html("");

    }
    // the result will be the path to the image
    else if(result!=0)
    {
        $(".imageholder").html("");
        // imageplace is the class of the div where you want to add the image  
        $(".imageplace").append("<img src='"+result+"'>");
    }   
}

$('#submit_form').on("click", function(){
    $.ajax({
      type: 'POST',
      url: path/fileUpload.php,
      data: image_input_name
    });
  
  //after submitting, get the url of the image form the server
  
    $('#div_to_display_image').html("<img src='path/image_file.jpg' alt='this' />");
  
  });


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
  
 console.log(logActivity("spiderman"))

  function logActivity(hero) { 
  

    var heroName = hero
    var matchDate = moment().format("MM/DD/YYYY");

    var newMatch = {
      hero: heroName,
      date: matchDate
    };
  
    // Uploads employee data to the database
    database.ref().push(newMatch);

  
    alert("REMOVE BEFORE FLIGHT: Match successfully added");
  
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var Name = childSnapshot.val().heroName;
    var matchDate = childSnapshot.val().matchDate;

  
    // Prettify the employee start
    var matchDatePretty = moment.unix(matchDate).format("MM/DD/YYYY");
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text("On " + matchDatePretty + " you were matched with " + heroName),
    );
  
    // Append the new row to the table
    $("#history-table > tbody").append(newRow);
  });
  
  }

