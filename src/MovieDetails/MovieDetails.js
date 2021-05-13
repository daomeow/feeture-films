import React from 'react';
import './MovieDetails.css';

const MovieDetails =({ movieInfo }) => {
  console.log(movieInfo)  
  return (
    <div className='movieDetails'>
      <img alt='Movie backdrop' src={movieInfo.backdrop_path}/>
      <div className='detailsContainer'>
        <img alt='Movie poster' src={movieInfo.poster_path}/>
        <h3>{movieInfo.title}</h3>
        <p>{movieInfo.average_rating}</p>
        <p>{movieInfo.release_date}</p>
        <p>{movieInfo.average_rating}</p>
      </div>
    </div>
  
  )
} 

export default MovieDetails;