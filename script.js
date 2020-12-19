
//Front-end
//Implement boostrap into our design
//search bar
//search button

// marvel api
var apiKey = "5e14a1a12a5c9e438899f4c6ed236a58";
queryURL = "https://gateway.marvel.com/"
more = "/v1/public/comics"
test = "https://gateway.marvel.com/v1/public/comics&e14a1a12a5c9e438899f4c6ed236a58"
characters = "http://gateway.marvel.com/v1/public/comics/291/characters?"

var marvelHeroesInMovies = ['spiderman', 'black widow'];
var avengersMoviesArr = ['Captain America: The First Avenger', 'Captain Marvel', 'Iron Man', 'Iron Man 2', 'The Incredible Hulk',
'Thor', 'The Avengers', 'Iron Man 3', 'Thor: The Dark World', 'Captain America: The Winter Soldier', 'Guardians of the Galaxy',
'Guardians of the Galaxy Vol 2', 'Avengers: Age of Ultron', 'Ant-Man', 'Captain America: Civil War', 'Doctor Strange',
'Black Panther', 'Spider-Man: Homecoming', 'Thor: Ragnarok', 'Ant-Man and the Wasp', 'Avengers: Infinity War', 'Avengers: Endgame',
'Spider-Man: Far From Home']

var endOfQueryStuff = "ts=1&apikey=1f75ef821356b695e0ddea475096c267&hash=3700da1df635c0697acbbcfcd70c655a"
var testsearch2 = "http://gateway.marvel.com/v1/public/comics/291/characters?ts=1&apikey=1f75ef821356b695e0ddea475096c267&hash=3700da1df635c0697acbbcfcd70c655a"

// timestamp = 1
// private key = 051db34c2590f092a8f3537025fb73796a30cecf
// public key = 1f75ef821356b695e0ddea475096c267
// ALL MARVEL OBJECTS http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1f75ef821356b695e0ddea475096c267&hash=3700da1df635c0697acbbcfcd70c655a
// The Hash generation formula given to us from the Marvel API is: (timestamp)(private key)(public key).
// hash = 3700da1df635c0697acbbcfcd70c655a
$("#search-button").on("click", function() {
    alert("Works?");
  });


// api resources
  // marvel --> characters
  // superheroapi --> https://superheroapi.com/
  queryURLsuperhero = "https://superheroapi.com/api/access-token";



// basic functionality 
  // select a character --> press button --> spiderman
    // from buttons or toggle drop down etc.
    // put 'spiderman' into search of marvel comics api
      // grab comics that spiderman appears in
      // grab their titles
    // search query for movies that include spiderman
  // search for all appearances of spiderman in comics
  // search comic titles / compare comic titles against marvel movies
  // return movies spiderman is in
    // movies must have list of all superheros 



// what APIs do we need and why?
  // omdb
    // movie information --> actors, year released, plot summary
  // superheroapi --> character attributes, biography, appearance, IMAGE
  // marvel --> to connect superheroes with the movies they are in







var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];
// displayMovieInfo function re-renders the HTML to display the appropriate content


function displayMovieInfo() {
  // WE WANT TO SEARCH BY ACTOR, NOT MOVIE NAME (?)
  var comicMovieTitle = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + comicMovieTitle + "&apikey=trilogy";
  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // Creating a div to hold the movies (can be the modal division where each individual superhero information comes up)
    //QUESTION!!- what different things are we looking to set up?
    var movieDiv = $("<div class='movie'>");
    // Storing the rating data- can be something we include in our post
    var rating = response.Rated;
    // Creating an element to have the rating displayed
    var pOne = $("<p>").text("Rating: " + rating);
    // Displaying the rating
    movieDiv.append(pOne);
    // Storing the release year
    var released = response.Released;
    // Creating an element to hold the release year
    var pTwo = $("<p>").text("Released: " + released);
    // Displaying the release year
    movieDiv.append(pTwo);
    // Storing the plot
    var plot = response.Plot;
    // Creating an element to hold the plot
    var pThree = $("<p>").text("Plot: " + plot);
    // Appending the plot
    movieDiv.append(pThree);
    // Retrieving the URL for the image
    var imgURL = response.Poster;
    // Creating an element to hold the image
    var image = $("<img>").attr("src", imgURL);
    // Appending the image
    movieDiv.append(image);
    // Putting the entire movie above the previous movies
    $("#movies-view").prepend(movieDiv);
  });
}
// Function for displaying movie data
function renderButtons() {
  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();
  // Looping through the array of movies
  for (var i = 0; i < movies.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("movie-btn");
    // Adding a data-attribute
    a.attr("data-name", movies[i]);
    // Providing the initial button text
    a.text(movies[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}
// This function handles events where a movie button is clicked
$("#add-movie").on("click", function (event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var movie = $("#movie-input").val().trim();
  // Adding movie from the textbox to our array
  movies.push(movie);
  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});
// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".movie-btn", displayMovieInfo);
// Calling the renderButtons function to display the initial buttons
renderButtons();
//Back-End
//Movie api and Marvel api link to our application
//search bar
//search button
//an for loop or for each array of characters with its own buttons
//timeline
//module of each character so we avoid different pages with a hover feature
//dark and light toggle
//opacity changes as you view a character




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
var queryURL = "https://developer.marvel.com/" + movie + "&apikey=trilogy"; Needs to be verified and updated.
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
