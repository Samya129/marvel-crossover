//Front-end
//Implement boostrap into our design
//search bar
//search button

$('#search-button').on('click', function () {
  alert('Works?')
})

//Back-End
//Movie api and Marvel api link to our application


//an for loop or for each array of characters with its own buttons
//timeline
//module of each character so we avoid different pages with a hover feature
//dark and light toggle
//opacity changes as you view a character
var movie = $("#movie-input").val();
//var queryURL = "https://developer.marvel.com/" + movie + "&apikey=trilogy"; Needs to be verified and updated.
var apiKey = "5e14a1a12a5c9e438899f4c6ed236a58"
$("#search-button").on("click", function(event) {

    event.preventDefault();

    

    var queryURL = "https://www.omdbapi.com/?t=" 

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#movie-view").text(JSON.stringify(response));
    });

  });
