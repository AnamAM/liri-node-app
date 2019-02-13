require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var command = process.argv[2];
var keyword = process.argv.slice(3).join(" "); // user inputs

switch (command) {
    case "concert-this": 
    concertData();
    break;

    case "spotify-this-song": 
    spotifyData();
    break;

    case "movie-this": 
    movieData();
    break;

    case "do-what-it-says": 
    doWhatItSays();
    break;
}

function concertData() {
    var concertQueryURL = "https://rest.bandsintown.com/artists/" + keyword + "/events?app_id=codingbootcamp";
    // console.log(keyword);

    axios.get(concertQueryURL)
    .then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
            // console.log(response);
            console.log("Venue: " + response.data[i].venue.name);
            console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
            console.log("Date of Event: " + moment(response.data[i].datetime).format("L"));
            console.log("-------------------------------------------");
        }
    })
}

function spotifyData() {
    // if the user does not input a specific name of a song, liri should return back data of "The Sign by Ace of Base"
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: "track", query: keyword, limit: 1 }, function(error, data) {
        if (error) {
            console.log(error);
        }
        // console.log(data);
        console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].preview_url);
        console.log("Album: " + data.tracks.items[0].album.name);
    })
}

function movieData() { 
    if (!keyword) {
        keyword = "Mr.Nobody";
    }

    var movieQueryURL = "http://www.omdbapi.com/?t=" + keyword + "&y=&plot=short&apikey=trilogy";

    axios.get(movieQueryURL)
    .then(function(response) {
        // console.log(response);
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    })
}

function doWhatItSays() {
    if (!keyword) {
        fs.readFile("./random.txt", "utf8", function(error, data) {
            if (error) {
                return console.log(error);
            }
            var dataArray = data.split(",");
            command = dataArray[0];
            keyword = dataArray[1];
            spotifyData();
        })                                          
    }
}                               


