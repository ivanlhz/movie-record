import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class MovieDetails extends Component {
  state = {
    title: '',
    poster: '',
    description: '',
    genres: [],
    error: ''
  };

  async componentWillMount() {
    const movieId = this.props.match.params.id;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=6cf04af57806c9c265dde24c929954d7&language=en-US`
      );

      this.setState({
        title: response.data.title,
        poster: `https://image.tmdb.org/t/p/w500${response.data.poster_path}`,
        description: response.data.overview,
        date: response.data.release_date,
        genres: response.data.genres,
        error: ''
      });
    } catch (apiError) {
      this.setState({ error: `There\'s not film with id: ${movieId}` });
    }
  }
  getGenres = () => this.state.genres.map(gen => gen.name).join(' ');

  render() {
    if (this.state.error.length > 0) {
      return <h2>{this.state.error}</h2>;
    } else {
      return (
        <div className="movie-details">
          <div className="poster">
            <img className="img-poster" src={this.state.poster} alt={this.state.title} />
          </div>
          <div className="director">{this.state.director} </div>
          <div className="date">{this.state.date}</div>
          <div className="description">
            <h2>{this.state.title}</h2>
            <p>{this.state.description}</p>
          </div>
          <div className="genre">{this.getGenres()}</div>
        </div>
      );
    }
  }
}

export default MovieDetails;
