var displayCharArr = [
    "Iron Man",
    "Captain America",
    "Black Panther",
    "Thor",
    "Hulk",
    "Doctor Strange",
    "Spider-man",
    "Falcon",
    "Scarlet Witch",
    "Ant-Man",
    "Hawkeye",
    "Star-Lord",
    "Gamora",
    "Groot",
    "Nebula",
  ];
  //add attributes and elements
  for (i = 0; i < displayCharArr.length; i++) {
    var superheroQueryURL =
      "https://superhero-search.p.rapidapi.com/?hero=" + displayCharArr[i];
    $.ajax({
      url: superheroQueryURL,
      method: "GET",
      headers: {
        "x-rapidapi-key": "54c80468acmsh43ee2bf41fce3bcp10eeadjsnb0994b7b57f7",
        "x-rapidapi-host": "superhero-search.p.rapidapi.com",
      },
    }).then(function (response) {
      var hero = JSON.parse(response);
      console.log(hero);
      //make elements dynamically to create cards
      var cellElement = $("<div>").addClass("cell");
      var zoomElement = $("<div>").addClass("zoom");
      var cardSectionElement = $("<div>").addClass("card-section");
      cardSectionElement.attr("style", "font-family: 'Bangers', cursive;");
      //Card Header Name
      var heroName = hero.name;
      var heroNameElement = $("<h4>").text(heroName);
      cardSectionElement.append(heroNameElement);
      //Card Image
      var imageElement = $("<img>");
      imageElement.attr("src", hero.images.md);
      imageElement.attr("id", "HeroPic");
      cardSectionElement.append(imageElement);
      //Real Name Description
      var realname = hero.biography.fullName;
      var realnameP = $("<p>").text("Real Name: " + realname);
      cardSectionElement.append(realnameP);
  
      zoomElement.append(cardSectionElement);
      cellElement.append(zoomElement);
      $("#cardAttach").append(cellElement);
      // cellElement.on('click', clickCardInfo(heroName));
      cellElement.one("click", function () {
        clickCardInfo(heroName);
        $("#cardAttach").hide();
        $("#doodle").show();
      });
      // var firstName = hero.name;
      // console.log(firstName);
      // var firstCardName = $("#cardName1");
      // var firstName1 = $("<h4>").text(firstName);
      // firstCardName.append(firstName1);
    });
  }
  
  function clickCardInfo(heroName) {
    var heroInfo = $("#doodle");
    var marvelQueryURL =
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=99+&name=" +
      heroName +
      "&apikey=1f75ef821356b695e0ddea475096c267&hash=3700da1df635c0697acbbcfcd70c655a";
    // do ajax call to MARVEL API
    $.ajax({
      url: marvelQueryURL,
      method: "GET",
    }).then(function (response) {
      //Create Variables from Marvel Key
      //where the info from the 3 apis will be displayed,
      // get marvel superhero object
      var charObj = response.data.results[0];
      // number of comic appearances
      var charComics = charObj.comics.available;
      var comicsNum = $("<p>").text("Number of Comic Appearances: " + charComics);
      heroInfo.append(comicsNum);
      // number of series appearances
      var charSeries = charObj.series.available;
      var seriesNum = $("<p>").text(
        "Number of Series Appearances: " + charSeries
      );
      heroInfo.append(seriesNum);
      // description
      var charDescrip = charObj.description;
      var heroDescription = $("<p>").text("Description: " + charDescrip);
      heroInfo.append(heroDescription);
      // URLs
      // var charURLS = charObj.urls;
      // add header info to card
      // var cardHeader = $("<h4>").text(heroName);
      // heroInfo.append(cardHeader);
      console.log("end first api response");
    });
    // search Superhero API for other information
    //var charSearch = $("#searchBarField").val().trim();
    var superheroQueryURL =
      "https://superhero-search.p.rapidapi.com/?hero=" + heroName; // name refers to the heroname being passed
    $.ajax({
      url: superheroQueryURL,
      method: "GET",
      headers: {
        "x-rapidapi-key": "54c80468acmsh43ee2bf41fce3bcp10eeadjsnb0994b7b57f7",
        "x-rapidapi-host": "superhero-search.p.rapidapi.com",
      },
    }).then(function (response) {
      var character = JSON.parse(response);
      // characater name
      var name = character.name;
      var nameP = $("<p>").text("Name:" + name);
      heroInfo.append(nameP);
      //real name
      var realname = character.biography.fullName;
      var realnameP = $("<p>").text("Real Name:" + realname);
      heroInfo.append(realnameP);
      // height .
      var height = character.appearance.height[0];
      var heightP = $("<p>").text("Height: " + height);
      heroInfo.append(heightP);
      // weight
      var weight = character.appearance.weight[0];
      var weightP = $("<p>").text("Weight: " + weight);
      heroInfo.append(weightP);
      // place of birth
      var placeOfBirth = character.biography.placeOfBirth;
      var placeOfBirthP = $("<p>").text("Place of Birth: " + placeOfBirth);
      heroInfo.append(placeOfBirthP);
      // race
      var race = character.appearance.race;
      var raceP = $("<p>").text("Race: " + race);
      heroInfo.append(raceP);
      // occupation
      var occupation = character.work.occupation;
      var occupationP = $("<p>").text("Occupation: " + occupation);
      heroInfo.append(occupationP);
      // aliases(?)
      var aliases = character.biography.aliases;
      var aliases = $("<p>").text("Aliases:" + aliases);
      heroInfo.append(aliases);
      // first appearance(?)
      var firstAppearance = character.biography.firstAppearance;
      var firstAppearanceP = $("<p>").text(
        "First Appearance: " + firstAppearance
      );
      heroInfo.append(firstAppearanceP);
      // image to the left of the description
      $("#heroPic").attr("src", character.images.md);
      console.log("end second api call");
      //$("#characterName").text(character.name);
      //$("#characterInfo").text(character.biography.fullName);
    });
    // search movie API for movie information
    //var movie = $("#searchBarField").val().trim();
    var queryURL =
      "https://movie-database-imdb-alternative.p.rapidapi.com/?s=" +
      heroName +
      "&page=1&r=json";
    $.ajax({
      url: queryURL,
      method: "GET",
      headers: {
        "x-rapidapi-key": "54c80468acmsh43ee2bf41fce3bcp10eeadjsnb0994b7b57f7",
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      },
    }).then(function (response) {
      var movieMarvel = response;
      //get section to put movie information
      //include movie poster image
      $("#heroPic").attr("src", movieMarvel.Search[0].Poster);
      //movie title
      var movTitle = movieMarvel.Search[0].Title;
      //create an element
      var movTitleP = $("<p>").text("Title:" + movTitle);
      //append to the div & repeat
      heroInfo.append(movTitleP);
      //movie year
      var movYear = movieMarvel.Search[0].Year;
      var movYearP = $("<p>").text("Year:" + movYear);
      heroInfo.append(movYearP);
      console.log(movieMarvel);
    });
  }
  // stick one API call inside the other --> nest
  // call the card in the search button function but as large as it can get
  $("#searchButton").one("click", function (event) {
    event.preventDefault();
    //start preparing for Marvel API KEY
    var heroName = $("#searchBarField").val().trim();
    clickCardInfo(heroName);
    $("#cardAttach").hide();
    $("#doodle").show();
  });
  // queryURLsuperhero = "https://superheroapi.com/api/access-token";
  
