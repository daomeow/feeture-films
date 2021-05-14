import React from 'react';
import movieData from '../sample-data';
import './MovieDetails.css';

const MovieDetails =({ movieInfo }) => {
  console.log(movieInfo)
  const { poster_path, title, average_rating, release_date, backdrop_path } = movieInfo;  
  return (
    <div className='movieDetails'>
      <div className='details-container'>
        <img src={poster_path} alt='Movie poster' class='details-poster'/>
        <div className='general-info'>
          <h3>{title}</h3>
          <p class='tagline'>The flower that blooms..</p>
          <p>{average_rating}</p>
          <div class='details-data'>
            <p>Release Date: {release_date}</p>
            <p>120 minutes</p>
          </div>
        </div>
        <p>OVERVIEW</p>
        <div className='details-money'>
          <p>Budget: $1M</p>
          <p>Revenue: $1M</p>
        </div>
        <div className='details-genre'>
          <p>Genres: Action</p>
        </div>
      </div>
      <img src={backdrop_path} alt='Movie backdrop' class='backdrop'/>
    </div>
  
  )
} 

export default MovieDetails;