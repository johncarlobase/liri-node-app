// require("dotenv").config();
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var moment = require("moment");
var command = process.argv[2];
var command = concert_this;
var concert_this = myConcert();
//var input = process.argv[3];

// The axios.get function takes in a URL and returns a promise (just like $.ajax)
function myConcert(){
      
    var nodeArgs = process.argv;
    var artistName = "";
//  multiple words (ex: Mumford and Sons) as a Node argument and retrieve data
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
          artistName = artistName + "+" + nodeArgs[i];
        }
        else {
          artistName += nodeArgs[i];
      
        }
      }
            
        axios
        .get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp")
        .then(function(response) {
            // If the axios was successful...
            // Then log the body from the site!
            
           // console.log(response);
            console.log("Name of the Venue: " + response.data[0].venue.name);
            console.log("What City: " + response.data[0].venue.city);
            console.log("When: " + response.data[0].dateime);
        })
        .catch(function(error) {
            if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
            }
            console.log(error.config);
        });
}
