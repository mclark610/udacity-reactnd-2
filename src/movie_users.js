import React from 'react';

class MovieUsers extends React.Component {
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

export default MovieUsers;
