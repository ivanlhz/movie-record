import React, { Component } from 'react';
import './style.css';
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
      <header>
        <h1>Search</h1>
        <input
          onChange={this.handleSearchTerm}
          value={this.state.searchTerm}
          placeholder="type title to search..."
          type="text"
        />
      </header>
    );
  }
}

export default Search;
