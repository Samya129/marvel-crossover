// //Front-end
// //Implement boostrap into our design
// //search bar
// //search button

// $('#search-button').on('click', function () {
//   alert('Works?')
// })

// //Back-End
// //Movie api and Marvel api link to our application

// //an for loop or for each array of characters with its own buttons
// //timeline
// //module of each character so we avoid different pages with a hover feature
// //dark and light toggle
// //opacity changes as you view a character
// var movie = $("#movie-input").val();
// var queryURL = "https://developer.marvel.com/" + movie + "&apikey=trilogy"; Needs to be verified and updated.
// var apiKey = "5e14a1a12a5c9e438899f4c6ed236a58"
// $("#search-button").on("click", function(event) {

//     event.preventDefault();

//     var queryURL = "https://www.omdbapi.com/?t="

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//       $("#movie-view").text(JSON.stringify(response));
//     });

//   });
$("#search-button").on("click", function () {
  var charSearch = $("#charSearch").val().trim();
  var queryURL = "https://superhero-search.p.rapidapi.com/?hero=" + charSearch;

  console.log(charSearch);

  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      "x-rapidapi-key": "54c80468acmsh43ee2bf41fce3bcp10eeadjsnb0994b7b57f7",
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
    },
  }).then(function (response) {
    var character = JSON.parse(response);
    console.log(character);
    console.log(character.biography.fullName);
    $("#characterName").text(character.name);
    $("#bioPic").attr("src", character.images.lg);
    $("#characterInfo").text(character.biography.fullName);

    //$("#characterInfo").text(character.biography);
    // var p = $("<p>").charInfo;
    // charInfo.append(p);
  });
});

$("#movieButton").on("click", function (movie) {
  // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
  var movie = $("#movieInput").val().trim();
  var queryURL =
    "https://movie-database-imdb-alternative.p.rapidapi.com/?s=" +
    movie +
    "&page=1&r=json";
  console.log(queryURL);
  console.log(movie);
  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      "x-rapidapi-key": "54c80468acmsh43ee2bf41fce3bcp10eeadjsnb0994b7b57f7",
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    },
  }).then(function (response) {
    // Printing the entire object to console
    var movieMarvel = response;
    console.log(movieMarvel);
  });
});

// Constructing HTML containing the artist information
// var artistName = $("<h1>").text(response.name);
// var artistURL = $("<a>").attr("href", response.url).append(artistName);
// var artistImage = $("<img>").attr("src", response.thumb_url);
// var trackerCount = $("<h2>").text(
//   response.tracker_count + " fans tracking this artist"
// );
// var upcomingEvents = $("<h2>").text(
//   response.upcoming_event_count + " upcoming events"
// );
// var goToArtist = $("<a>")
//   .attr("href", response.url)
//   .text("See Tour Dates");

// Empty the contents of the artist-div, append the new artist content
//     $("#artist-div").empty();
//     $("#artist-div").append(
//       artistURL,
//       artistImage,
//       trackerCount,
//       upcomingEvents,
//       goToArtist
//     );
//   });
// }

//Event handler for user clicking the select-artist button

// Preventing the button from trying to submit the form

// Storing the artist name
// Running the searchMoviePoster function(passing in the artist as an argument)
