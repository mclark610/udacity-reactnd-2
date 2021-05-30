import React, {Component} from 'react';
import MovieUsers from './movie_users';


class MovieFavoritesList extends Component {

	render() {
      return (
        <div>
        {this.props.movieFavorites.map( movieFavorite => (
          		<MovieUsers key={movieFavorite.movieName} movieTitle={movieFavorite.movieName} movieUsers={movieFavorite.users}/>
            ))}
       </div>
      );
    }
}
export default MovieFavoritesList;
