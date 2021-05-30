import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

/* initMovieFavorites:
*	Creates a json array of movies with a list of users that rated the selected
*   movies as favorites.  
*/

const initMovieFavorites = () => {
    let movieFavorites = [];
    for (let pos in movies) {
   
        let movieFavorite = {
            "movieID": movies[pos].id,
            "movieName" : movies[pos].name,
            "users":[],
        }
        movieFavorites.push(movieFavorite);
    }
    return movieFavorites;    
}

/* addUsersToMovieFavorites:
 * Updates the json array to add the users to each movie that the user favored.
 * If the movie does not have any users, the user array remains empty.
 */
const addUsersToMovieFavorites = (movieFavorites) => {
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

class MovieUsers extends Component {
  constructor(props) {
    super(props);
    
    this.movieTitle = this.props.movieTitle;
    this.users = this.props.movieUsers;
    console.log("movietitle: " + this.movieTitle);
  }
  
  render() {
      // User heading is List header or Liked by
      let userHeading= this.users.length===0?(""):(<p>Liked By</p>);
      return (
        <div>
      	    <h2> {this.movieTitle} </h2>
            {userHeading}
            {this.users.length === 0 ? (
                <p>None of the current users liked this movie</p>
            ) : (
              <ul>
              {this.users.map(user => {
                 return(<li key={user}>{user}</li>);
              })}
              </ul>
            )}
        </div>
       
      );
  }
}

class MovieFavoritesList extends Component {
	constructor(props) {
      	super(props);
      
        /* organize data to put into a format to make it easier to display. */
        this.movieFavorites = initMovieFavorites();
        this.movieFavorites = addUsersToMovieFavorites(this.movieFavorites);
      
    }
  
	render() {
      return (
        <div>      
        {       
            this.movieFavorites.map( movieFavorite => (
          		<MovieUsers key={movieFavorite.movieName} movieTitle={movieFavorite.movieName} movieUsers={movieFavorite.users}/>
            ))
        } 
       </div>
      );
    }	
  
}

class App extends Component {
  
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
		<MovieFavoritesList />
      </div>
    );
  }
}

export default App;
