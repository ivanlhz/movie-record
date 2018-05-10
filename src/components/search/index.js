import React, { Component } from 'react';
import './style.css';
import MovieCard from '../movie-card';
import movies from '../../data/movies.json';

class Search extends Component {
  state = {
    searchTerm: ''
  };

  handleSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  parseJsonFile = jsonFile => JSON.parse(JSON.stringify(jsonFile));

  getMovies = () =>
    this.parseJsonFile(movies)
      .filter(movie => movie.title.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
      .map(movie => <MovieCard key={movie.id} {...movie} />);

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
        <div className="movie-list">{this.getMovies()}</div>
      </div>
    );
  }
}

export default Search;
