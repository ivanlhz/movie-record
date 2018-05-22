import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MovieCard = props => (
  <div className="card">
    <Link to={`movies/${props.id}`}>
      <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt="" />
    </Link>
  </div>
);
export default MovieCard;
