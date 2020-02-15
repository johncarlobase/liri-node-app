# L.I.R.I BOT
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.




## Installations.
1. git clone https://github.com/johncarlobase/liri-node-app.git
2. Open liri.js in Visual Studio Code
3. Control ~  to open terminal 
4. Interminal, Navigate to the folder
5. npm install



### What Each Command Should Do

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")
     
     
 2. `node liri.js spotify-this '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.
   
3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

      * If the user doesn't type a movie in, the program will output data for the movie 'Parasite'

      * If you haven't watched "Parasite" then you should: 
   
   4. `node liri.js do-what-it-says`

       * It should run `spotify-this` for "Total Eclipse of the Heart" as follows the text in `random.txt`.

## Demo 

https://drive.google.com/file/d/16BmmiswaWSoImhCl5ETis0ZGcM6EW6bA/view

### Technologies Used:
1. DotEnv
2. Moment
3. Colors
4. Axios
5. Fs
6. npm Spotify API
7. npm Bandsintown API
8. npm OMDB API




## Authors

* **John Carlo Base - https://github.com/johncarlobase


## Acknowledgments

* Thank you to Google for the inspiration. 
* Thank you to my 5 year old daughter for bothering her mom instead (for 3 months now). 

