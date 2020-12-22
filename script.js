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
    $("#characterName").text(character.name);
    $("#bioPic").attr("src", character.images.md);
  });
});
