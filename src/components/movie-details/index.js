import React, { Component } from 'react';
import './style.css';
import movies from '../../data/movies.json';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = movies.find(movie => movie.id === parseInt(props.match.params.id, 10));
  }

  render() {
    return (
      <div className="movie-details">
        <div className="poster">
          <img className="img-poster" src={this.state.poster} alt={this.state.title} />
        </div>
        <div className="director">{this.state.director} </div>
        <div className="date">{this.state.year}</div>
        <div className="description">
          <h2>{this.state.title}</h2>
          <p>{this.state.plot}</p>
        </div>
        <div className="genre">{this.state.genre}</div>
      </div>
    );
  }
}

export default MovieDetails;
