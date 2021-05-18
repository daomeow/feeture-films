import React from 'react';
import './Movie.css';

const Movie = ({ posterPath, title, onClick, id, onMouseEnter, onMouseMove, onMouseLeave }) => {
  const tip = `cursor-${id}`
  return (
    <div className='card'>
    <img 
      className='poster' 
      src={posterPath}
      alt={title}
      onClick={() => onClick(id)}    
      id={id}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseMove={(event) => onMouseMove(event, id)}
      onMouseLeave={() => onMouseLeave()}
    />
    <span className="cursor" id={tip} >{title}
    </span>
    </div>
  )
}


 

  export default Movie;