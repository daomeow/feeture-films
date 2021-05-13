import React from 'react';
import './Movie.css';

const Movie = ({ posterPath, title, onClick, id }) =>
 (
 <div className='card'>
  <img 
    className='poster' 
    src={posterPath}
    alt={title}
    onClick={() => onClick(id)}    
    id={id}
  />
  
 </div>
 )

  export default Movie;