import React from 'react';
import { Link } from 'react-router-dom';
import 'normalize.css';
import './style.css';

const MovieCard = props => (
  <div className="card">
    <Link to={`movies/${props.id}`}>
      <img src={props.poster} alt="" />
    </Link>
  </div>
);
export default MovieCard;
