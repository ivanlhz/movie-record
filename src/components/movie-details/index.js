import React, { Component } from 'react';
import './style.css';
import movies from '../../../data/movies.json';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = movies.find(movie => movie.id === parseInt(props.match.params.id, 10));
  }

  render() {
    return (
      <div class="details">
        <h1>{this.state.title}</h1>
        <img class="img-poster" src={this.state.poster} alt={this.state.title} />
        <ul>
          <li>
            <b>Year:</b> {this.state.year}
          </li>
          <li>
            <b>Genre:</b> {this.state.genre}
          </li>
          <li>
            <b>Director:</b> {this.state.director}
          </li>
        </ul>
        <p>{this.state.plot}</p>
      </div>
    );
  }
}

export default MovieDetails;
