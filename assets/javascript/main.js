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
  

    //local variables to hold hero name and date
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
  
    // Create the new row
    var newRow = $("<ul class='list-group'>").append(
      $("<li class='list-group-item'>").text("On " + matchDate + " you were matched with " + heroName),
    );
  
    // Append the new row to the table
    $("#resultsList").append(newRow)
    
  });
  
  }



var compareFace = function () {

    var name = $(this).attr("data-name");
    var queryURL = "https://api-us.faceplusplus.com/facepp/v3/search" +
      name + "AuLF26cH7L5MFtwVuC9hhqCQbiB6K8HR";

    $.ajax({
      url: queryURL,
      method: "POST"
    })
      .then(function (response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {

        //   var gifDiv = $("<div class='item'>");
        //   gifDiv.addClass("gifDiv");
        //   // pulling rating of gif
        //   // var rating = results[i].rating;
        //   var rating = $("<p>").text("Rating: " + results[i].rating);
        //   gifDiv.append(rating);
        //   // pulling gif
        //   var nameImage = $("<img>");
        //   nameImage.attr("src", results[i].images.fixed_height_small_still.url);
        //   nameImage.attr("data-still", results[i].images.fixed_height_small_still.url);
        //   nameImage.attr("data-animate", results[i].images.fixed_height_small.url);
        //   nameImage.attr("data-state", "still");
        //   // nameImage.attr("onclick", playPause)
        //   nameImage.addClass("image");
        //   gifDiv.append(nameImage);

          $("#marvel-anc").append(gifDiv);
        }
      });
  }

//   displaying the uploaded image
