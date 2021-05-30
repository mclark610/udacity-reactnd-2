import React,{Component} from 'react';


/* initMovieFavorites:
*	Creates a json array of movies with a list of users that rated the selected
*   movies as favorites.  
*/

const initMovieFavorites = (profiles,users,movies) => {
    let movieFavorites = [];
    for (let pos in movies) {
   
        let movieFavorite = {
            "movieID": movies[pos].id,
            "movieName" : movies[pos].name,
            "users":[],
        }
        movieFavorites.push(movieFavorite);
    }

    // add users to movie favorites array
    movieFavorites = addUsersToMovieFavorites(movieFavorites,profiles,users,movies);

    return movieFavorites;    
}

/* addUsersToMovieFavorites:
 * Updates the json array to add the users to each movie that the user favored.
 * If the movie does not have any users, the user array remains empty.
 */
const addUsersToMovieFavorites = (movieFavorites,profiles,users,movies) => {
    // Cycle through profiles to add users

    profiles.forEach( profile => {

        let idx = movieFavorites.findIndex(movieFavorite => movieFavorite.movieID.toString() === profile.favoriteMovieID );
        if (idx === -1) {
            console.log("favoriteMovieID index not found");
        }
        else {
            movieFavorites[idx].users.push(users[profile.userID].name);
        }
    })


    return movieFavorites;
}


class MovieFavoritesList extends Component {
	constructor(props) {
      	super(props);
      
        this.movies = this.props.movieData;
        this.profiles = this.props.profileData;
        this.users = this.props.userData;
      
        /* organize data to put into a format to make it easier to display. */
        this.movieFavorites = initMovieFavorites(this.profiles,this.users,this.movies);
      
    }
  
	render() {
      return (
        <div>      
        {this.movieFavorites.map( movieFavorite => (
          		<MovieUsers key={movieFavorite.movieName} movieTitle={movieFavorite.movieName} movieUsers={movieFavorite.users}/>
            ))} 
       </div>
      );
    }	  
}


export default MovieFavoritesList;