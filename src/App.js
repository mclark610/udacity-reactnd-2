import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MovieFavoritesList from "./movie_favorites_list";

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

const initMovieFavorites = (movies,profiles,users) => {
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
    movieFavorites = addUsersToMovieFavorites(movieFavorites,movies,profiles,users);

    return movieFavorites;
}

/* addUsersToMovieFavorites:
 * Updates the json array to add the users to each movie that the user favored.
 * If the movie does not have any users, the user array remains empty.
 */
const addUsersToMovieFavorites = (movieFavorites,movies,profiles,users) => {
    // Cycle through profiles to add users

    profiles.forEach( profile => {

        let idx = movieFavorites.findIndex(movieFavorite => movieFavorite.movieID.toString() === profile.favoriteMovieID );
        if (idx === -1) {
            console.log("favoriteMovieID index not found");
        }
        else {
            movieFavorites[idx].users.push( users[profile.userID].name );
        }
    })


    return movieFavorites;
}
 
class App extends Component {
  render() {
      let movieFavorites = initMovieFavorites(movies,profiles,users);
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
		<MovieFavoritesList movieFavorites={movieFavorites}/>
      </div>
    );
  }
}
export default App;
