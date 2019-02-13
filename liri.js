require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
// var spotify = new Spotify(keys.spotify);
// var spotify = require("node-spotify-api");
var moment = require("moment");
var command = process.argv[2];
var artistName = process.argv.slice(3).join(" ");
var movieName = process.argv.slice(3).join(" ");
var keyword = process.argv.slice(3).join(" ");

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
    var concertQueryURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
    // console.log(artistName);

    axios.get(concertQueryURL)
    .then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
            // console.log(response);
            console.log("Venue: " + response.data[i].venue.name);
            console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
            console.log("Date of Event: " + moment(response.data[i].datetime).format("L"));
        }
    })
}

// function spotifyData() {
//     spotify.search({ type: 'track', query: keyword}, function(error, data) {
//         if (error) {
//             return console.log(error);
//         }
//         console.log(data);
//     })
// }

function movieData() { 
    // if command === 'movie-this' && process.argv[3] === undefined then movieName = 'Mr.Nobody'
    if (command === "movie-this" && process.argv[3] === undefined) {
        movieName = "Mr.Nobody";
    }
    var movieQueryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

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


