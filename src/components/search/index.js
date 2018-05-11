import React, { Component } from 'react';
import './style.css';
import MovieCard from '../movie-card';
import movies from '../../data/movies.json';

class Search extends Component {
  state = {
    searchTerm: '',
    filterField: 'title'
  };

  handleSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  parseJsonFile = jsonFile => JSON.parse(JSON.stringify(jsonFile));

  getMovies = () => {
    const searchText = this.state.searchTerm.toUpperCase();
    const filter = this.state.filterField;
    const response = this.parseJsonFile(movies)
      .filter(movie => this.findElementByFilter(movie, searchText, filter))
      .map(movie => <MovieCard key={movie.id} {...movie} />);

    return response.length > 0 ? response : <h2> Not Found </h2>;
  };

  handleFilter = event => {
    this.setState({ filterField: event.target.value });
    this.getMovies();
  };

  findElementByFilter = (element, text, filter) => element[filter].toUpperCase().indexOf(text) >= 0;

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
              <option selected value="title">
                Title
              </option>
              <option value="year">Year</option>
              <option value="genre">Genre</option>
            </select>
          </div>
        </div>

        <div className="content">
          <div className="movie-list">{this.getMovies()}</div>
        </div>
      </div>
    );
  }
}

export default Search;
