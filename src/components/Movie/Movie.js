import React from 'react';
import './Movie.css';
import { Link } from "react-router-dom";

const Movie = ({ posterPath, title, onClick, id, onMouseEnter, onMouseMove, onMouseLeave }) => {
  const tip = `cursor-${id}`
  return (
    <Link to={`/${id}`} className='card'>
      <>
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
      </>
    </Link>

  )
}


 

  export default Movie;
