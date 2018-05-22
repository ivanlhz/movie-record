import React, { Component } from 'react';
import './style.css';
import MovieCard from '../movie-card';
// import movies from '../../data/movies.json';
import axios from 'axios';

class Search extends Component {
  state = {
    searchTerm: '',
    filterField: 'title',
    movies: [],
    genres: [],
    error: ''
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=6cf04af57806c9c265dde24c929954d7&language=en-US&page=1'
      );

      const genresResponse = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=6cf04af57806c9c265dde24c929954d7&language=en-US'
      );

      this.setState({ movies: response.data.results, genres: genresResponse.data.genres, error: '' });
    } catch (apiError) {
      this.setState({ error: 'Api error' });
    }
  };

  handleSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  getMovies = () => {
    const searchText = this.state.searchTerm.toUpperCase();
    const filter = this.state.filterField;
    const response = this.state.movies
      .filter(movie => this.findElementByFilter(movie, searchText, filter))
      .map(movie => <MovieCard key={movie.id} {...movie} />);

    return response.length > 0 ? response : <h2> Not Found </h2>;
  };

  handleFilter = event => {
    this.setState({ filterField: event.target.value });
    this.getMovies();
  };

  findElementByFilter = (element, text, filter) => {
    switch (filter) {
      case 'year':
        const term = parseInt(text,10);
        const moveDate = new Date(element.release_date).getFullYear();
        return moveDate === term;
      case 'genre':
        const genreId = this.state.genres.find(gen => gen.name.toUpperCase().indexOf(text) >= 0).id;
        return element.genre_ids.find(id => id === genreId);
      default:
        return element[filter].toUpperCase().indexOf(text) >= 0;
    }
  };

  getContent = () => {
    if (this.state.error.length > 0) {
      return <h2>{this.state.error}</h2>;
    } else {
      return <div className="movie-list">{this.getMovies()}</div>;
    }
  };

  render() {
    return (
      <div className="layout">
        <div className="nav">
          <div className="title">
            <h2>
              MovieRecord: <span>{this.state.searchTerm}</span>
            </h2>
          </div>
          <div className="search">
            <input
              onChange={this.handleSearchTerm}
              value={this.state.searchTerm}
              placeholder={`Type ${this.state.filterField.toLowerCase()} to search ...`}
              type="text"
            />
          </div>
          <div className="filter">
            <select onChange={this.handleFilter} name="filter" id="movie-filter">
              <option value="title">Title</option>
              <option value="year">Year</option>
              <option value="genre">Genre</option>
            </select>
          </div>
        </div>

        <div className="content">{this.getContent()}</div>
      </div>
    );
  }
}

export default Search;
