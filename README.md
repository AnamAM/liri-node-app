# liri-node-app
### In this LIRI Node Application, a user will be able to enter the 4 different CLIs (Command-Line Interface). With these command lines, LIRI will communicate with the APIs in order for the user to recieve the desired data in return.
* ``` concert-this ```
* ``` spotify-this-song ```
* ``` movie-this ```
* ``` do-what-it-says ```


## Instructions for use:
**Be sure to run ``` npm install ``` first in order to access all dependencies needed for this application.**

## Examples:

```node liri.js concert-this <artist/band name here>``` 

When the user enters a name of a favorite artist or a favorite band, he or she will recieve information of where and when that particular artist or band will be performing.
<img width="619" alt="concert" src="https://user-images.githubusercontent.com/44790952/53468257-10b1dd80-3a1f-11e9-9a7a-446efdb536ae.png">


```node liri.js spotify-this-song <song name here>```

When a user enters a song name, he or she will recieve the full name of the song, along with who sung the song. If the user has a desire to listen to a preview of the song, he or she may click the link which is connected to the spotify API.
<img width="1014" alt="spotify" src="https://user-images.githubusercontent.com/44790952/53468268-1b6c7280-3a1f-11e9-8cb5-c374265fb918.png">


```node liri.js movie-this <movie name here>```

When a user enters a name of a favorite movie, he or she will recieve the rating of the movie, the year it was released, the plot of the movie, etc.
<img width="1011" alt="movie" src="https://user-images.githubusercontent.com/44790952/53468283-26bf9e00-3a1f-11e9-8755-8d04cd0c1c98.png">


```node liri.js movie-this```

When a user accidentl hits <enter> without entering the name of a movie, the user will recieve information of a default movie, Mr. Nobody.
<img width="1015" alt="default-movie" src="https://user-images.githubusercontent.com/44790952/53468298-3b9c3180-3a1f-11e9-9709-5908f6d503ed.png">


```node liri.js do-what-it-says```

This specific command line will require a **fs file** which reads or write a text file for the LIRI Node App. However, the app will be using a read file which will **read** the text that has been provided in the text file.
<img width="1015" alt="dowhatitsays" src="https://user-images.githubusercontent.com/44790952/53468289-2f17d900-3a1f-11e9-94a2-8ebf7ed9a0b9.png">

