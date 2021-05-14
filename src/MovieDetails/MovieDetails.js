import React from 'react';
import movieData from '../sample-data';
import './MovieDetails.css';

const MovieDetails =({ movieInfo }) => {
  console.log(movieInfo)
  const { poster_path, title, average_rating, release_date, backdrop_path } = movieInfo;  
  return (
    <div className='movie-details'>
      <div className='details-container'>
        <div className='top-details'>
          <img src={poster_path} alt='Movie poster' className='details-poster'/>
          <div className='general-info'>
            <h3>{title}</h3>
            <p className='tagline'>The flower that blooms..</p>
            <p>{average_rating}</p>
            <div className='details-data'>
              <sub>{release_date}</sub><sub>120 minutes</sub>
            </div>
          </div>
        </div>
        <p>OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW</p>
        <p>Budget: $1M</p>
        <p>Revenue: $1M</p>
        <p>Genres: Action</p>
      </div>
      <img src={backdrop_path} alt='Movie backdrop' className='backdrop'/>
    </div>
  
  )
} 

export default MovieDetails;