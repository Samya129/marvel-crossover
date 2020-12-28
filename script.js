// S T A R T
console.log("START");
// marvel api + hash for the queryURL + other URL info
var apiKeyPublic = "1f75ef821356b695e0ddea475096c267";
var hash = "3700da1df635c0697acbbcfcd70c655a";
var endOfQueryStuff =
  "ts=1&apikey=1f75ef821356b695e0ddea475096c267&hash=3700da1df635c0697acbbcfcd70c655a";
var HulkSearch =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&name=Hulk&limit=99&apikey=1f75ef821356b695e0ddea475096c267&hash=3700da1df635c0697acbbcfcd70c655a";
// var testsearch2 = "http://gateway.marvel.com/v1/public/comics/291/characters?ts=1&apikey=1f75ef821356b695e0ddea475096c267&hash=3700da1df635c0697acbbcfcd70c655a"
// var test3 = "http://gateway.marvel.com/v1/public/characters/1010802?ts=1&limit=99&apikey=1f75ef821356b695e0ddea475096c267&hash=3700da1df635c0697acbbcfcd70c655a"
// ALL MARVEL OBJECTS http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1f75ef821356b695e0ddea475096c267&hash=3700da1df635c0697acbbcfcd70c655a
// The Hash generation formula given to us from the Marvel API is: (timestamp)(private key)(public key).

// example arrays to work with
var marvelHeroesInMovies = ["spiderman", "black widow"];
var avengersMoviesArr = [
  "Captain America: The First Avenger",
  "Captain Marvel",
  "Iron Man",
  "Iron Man 2",
  "The Incredible Hulk",
  "Thor",
  "The Avengers",
  "Iron Man 3",
  "Thor: The Dark World",
  "Captain America: The Winter Soldier",
  "Guardians of the Galaxy",
  "Guardians of the Galaxy Vol 2",
  "Avengers: Age of Ultron",
  "Ant-Man",
  "Captain America: Civil War",
  "Doctor Strange",
  "Black Panther",
  "Spider-Man: Homecoming",
  "Thor: Ragnarok",
  "Ant-Man and the Wasp",
  "Avengers: Infinity War",
  "Avengers: Endgame",
  "Spider-Man: Far From Home",
];

var monkeyPic =
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.telegraph.co.uk%2Fmultimedia%2Farchive%2F02790%2Fmonkey_2790171k.jpg&f=1&nofb=1";

  
  // F U N C T I O N S


// stick one API call inside the other --> nest
// call the card in the search button function but as large as it can get

$("#searchButton").on("click", function (event) {
  event.preventDefault();
  var heroName = $("#searchBarField").val().trim();
  console.log(heroName + " hero name logged");
  var marvelQueryURL =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=99+&name=" +
    heroName +
    "&apikey=1f75ef821356b695e0ddea475096c267&hash=3700da1df635c0697acbbcfcd70c655a";
  // get/create elements to attach superhero data
  var grid = $("#cardAttach");
  // add cell
  var cell = $("<div>").addClass("cell");
  grid.append(cell);
  // add card to cell
  var card = $("<div>").addClass("card");
  cell.append(card);
  // add card section to card
  var cardSection = $("<div>").addClass("card-section");
  card.append(cardSection);
  // add monkey image to card
  var cardImg = $("<img>").addClass("cardImage") //.attr("src", monkeyPic);
  card.append(cardImg);


  // do second ajax call to MARVEL API
  $.ajax({
    url: marvelQueryURL,
    method: "GET",
  }).then(function (response) {

  // get marvel superhero object
  var charObj = response.data.results[0];
  // number of comic appearances
  var charComics = charObj.comics.available;
  // number of serioes appearances
  var charSeries = charObj.series.available;
  // description
  var charDescrip = charObj.description;
  // URLs
  // var charURLS = charObj.urls;

  // add header info to card
  var cardHeader = $("<h4>").text(heroName);
  card.append(cardHeader);
  
  // add paragraphs for information from Marvel API
  var seriesNum = $("<p>").text(
    "Number of Series Appearances: " + charSeries);
  card.append(seriesNum);
  var comicsNum = $("<p>").text("Number of Comic Appearances: " + charComics);
  card.append(comicsNum);
  var heroDescription = $("<p>").text("Description: " + charDescrip);
  card.append(heroDescription);

  console.log("end response");
  });

  // search Superhero API for other information
  var charSearch = $("#searchBarField").val().trim();
  var superheroQueryURL = "https://superhero-search.p.rapidapi.com/?hero=" + charSearch;

  $.ajax({
    url: superheroQueryURL,
    method: "GET",
    headers: {
      "x-rapidapi-key": "54c80468acmsh43ee2bf41fce3bcp10eeadjsnb0994b7b57f7",
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
    },
  }).then(function (response) {
    // hulk
    var character = JSON.parse(response);
    // height .
    var height = character.appearance.height[0];
    // weight 
    var weight = character.appearance.weight[0];
    // place of birth
    var placeOfBirth = character.biography.placeOfBirth;
    // race 
    var race = character.appearance.race;
    // occupation
    var occupation = character.work.occupation;
    // aliases(?) 
    var aliases = character.biography.aliases;
    // first appearance(?) 
    var firstAppearance = character.biography.firstAppearance;
    // image 
    var comicImg = character.images.lg
    console.log(comicImg);

    console.log("end second api call");

    // create html elements and append them to the card
    var heightP = $("<p>").text("Height: " + height);
    card.append(heightP);
    var weightP = $("<p>").text("Weight: " + weight);
    card.append(weightP);
    var placeOfBirthP = $("<p>").text("Place of Birth: " + placeOfBirth);
    card.append(placeOfBirthP);
    var raceP = $("<p>").text("Race: " + race);
    card.append(raceP);
    var occupationP = $("<p>").text("Occupation: " + occupation);
    card.append(occupationP);
    var firstAppearanceP = $("<p>").text("First Appearance: " + firstAppearance);
    card.append(firstAppearanceP);
    // change image to coimc image
    $("#cardImg").attr("src", comicImg);

    //$("#characterName").text(character.name);
    //$("#bioPic").attr("src", character.images.lg);
    //$("#characterInfo").text(character.biography.fullName);
  });
});

queryURLsuperhero = "https://superheroapi.com/api/access-token";

// character input --> comic titles appear --> grab titles--> search titles in  movie API --> display movie results

// basic functionality --> search comic titles / then compare comic titles with marvel movies
// select a character --> press button --> spiderman
// from buttons or toggle drop down etc.
// put 'spiderman' into search of marvel comics api
// search for all appearances of spiderman in comics
// grab comics that spiderman appears in
// grab their titles
// search query for movies that include spiderman
// return movies spiderman is in
// movies must have list of all superheros


//Back-End
//Movie api and Marvel api link to our application
//search bar
//search button
//an for loop or for each array of characters with its own buttons
//timeline
//module of each character so we avoid different pages with a hover feature
//dark and light toggle
//opacity changes as you view a character


//Back-End
//Movie api and Marvel api link to our application

//an for loop or for each array of characters with its own buttons
//timeline
//module of each character so we avoid different pages with a hover feature
//dark and light toggle
//opacity changes as you view a character
// var movie = $("#movie-input").val();
// var queryURL = "https://developer.marvel.com/" + movie + "&apikey=trilogy"; // Needs to be verified and updated.
// var apiKey = "5e14a1a12a5c9e438899f4c6ed236a58"
// $("#search-button").on("click", function(event) {
