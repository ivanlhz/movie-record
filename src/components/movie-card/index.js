import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MovieCard = props => (
  <div className="card">
    <h2>
      <Link to={`movies/${props.id}`}>{props.title}</Link>
    </h2>
  </div>
);
export default MovieCard;
