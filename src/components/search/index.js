import React, { Component } from 'react';
import './style.css';
import MovieCard from '../movie-card';
import * as movies from '../../data/movies.json';

class Search extends Component {
  state = {
    searchTerm: ''
  };

  handleSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>Search</h1>
          <input
            onChange={this.handleSearchTerm}
            value={this.state.searchTerm}
            placeholder="type title to search..."
            type="text"
          />
        </header>
        <div className="movie-list">
          {movies
            .filter(movie => movie.title.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(movie => <MovieCard {...movie} />)}
        </div>
      </div>
    );
  }
}

export default Search;
