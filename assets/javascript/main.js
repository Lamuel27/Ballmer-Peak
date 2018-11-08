// import 'object.js';
// console.log(loadObject);


var characters = [
    {
        name: 'Ant-Man',
        imageUrl: "https://thesource.com/wp-content/uploads/2015/07/ant-man1.jpg",
    }
    // {
    //     name: 'Black Panther',
    //     imageUrl: "https://cdn.vox-cdn.com/thumbor/SQnBpaoYz4vaIZ71gY_Oho2izjI=/0x0:1056x439/1200x800/filters:focal(495x39:663x207)/cdn.vox-cdn.com/uploads/chorus_image/image/58986389/Screen_Shot_2018_01_11_at_3.47.24_PM.0.png",
    // },
    // {
    //     name: 'Black Widow',
    //     imageUrl: "https://am22.akamaized.net/tms/cnt/uploads/2018/05/black-widow-scarlett-johansson-marvel-the-avengers-1200x752.jpg",
    // },
    // {
    //     name: 'Bucky',
    //     imageUrl: "https://static.tvtropes.org/pmwiki/pub/images/mcu_bucky_40s.png",
    // },
    // {
    //     name: 'Captain America',
    //     imageUrl: "https://onthegoinmco.com/wp-content/uploads/2013/11/Cap.jpg",
    // },
    // {
    //     name: 'Captain Marvel',
    //     imageUrl: "https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2018/06/15/15/brie-larson-captain-marvel-0.jpg",
    // },
    // {
    //     name: 'Deadpool',
    //     imageUrl: "https://i2-prod.mirror.co.uk/incoming/article6809012.ece/ALTERNATES/s615b/Ryan-Reynolds.jpg",
    // }
]

var reader;
// function jupload()
// {
//     $(".imageholder").append('<img src="./images/loading.gif">');
// }
function juploadstop(result) {
    if (result == 0) {
        $(".imageholder").html("");

    }
    // the result will be the path to the image
    else if (result != 0) {
        $(".imageholder").html("");
        // imageplace is the class of the div where you want to add the image  
        $(".imageplace").append("<img src='" + result + "'>");
    }
}

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



$(document).ready(function () {
    $("#collapseExample").click(function () {
        $('.list-group').append("<li class='list-group-item'>" + "You could be related to " + heroname + " </li>")
    });
});

var compareFace = function () {
    console.log("C", characters)
    for (var i = 0; i < characters.length; i++) {
        console.log("In for loop");
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api-us.faceplusplus.com/facepp/v3/compare?api_key=AuLF26cH7L5MFtwVuC9hhqCQbiB6K8HR&api_secret=ovhD7RlOb-4xLChOM2EGP0sKaCnZ9aFV&image_file1=" + characters[i + 1] + "&image_url2=" + characters[i].imageUrl,
            "method": "POST",
            // "headers": {
            //     "cache-control": "no-cache",
            //     "Access-Control-Allow-Origin" : "*",
            //     "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
            //     "Access-Control-Allow-Headers": "Authorization, Lang",
            //     "postman-token": "1bc6e57f-f4e9-e6fa-478c-fed70312feef"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    // let postJson = {
    //     "api_key": "AuLF26cH7L5MFtwVuC9hhqCQbiB6K8HR",
    //     "api_secret": "ovhD7RlOb-4xLChOM2EGP0sKaCnZ9aFV",
    //     "image_url1": characters[i+1].imageUrl,
    //     "image_url2": characters[i].imageUrl
    // }
    // headers = {
    //     "Access-Control-Allow-Origin" : "*"
    // }
    // console.log(reader)
    // var queryURL = "https://api-us.faceplusplus.com/facepp/v3/compare";

    // $.ajax({
    //     url: queryURL,
    //     headers: headers,
    //     method: "POST",
    //     dataType: 'jsonp',
    //     body: JSON.parse(JSON.stringify(postJson))
    // }).then(function (error, response, body) {
    // console.log(error)
    // console.log(response)
    // console.log(body)
    // $("#marvel-anc").append(gifDiv);
    //     })
}
// }


//   displaying the uploaded image

// $('#btn').on('click', function () {           //on click of button
//     $('#prof-pic').attr('src', $('#url').val(""));  //get the input value and 
//     console.log('#url');
//     compareFace()

// })
$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            console.log(this.files)
            reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
            compareFace()
        }
    });
});

function imageIsLoaded(e) {
    $('#prof-pic').attr('src', e.target.result);
};


// comparing the uploaded image with array of heroes

// displaying details about the marvel hero

// pushing past results from Firebase to the table
