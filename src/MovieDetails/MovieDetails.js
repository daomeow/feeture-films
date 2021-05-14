import React from 'react';
import movieData from '../sample-data';
import './MovieDetails.css';

const MovieDetails =({ movieInfo }) => {
  const { poster_path, title, average_rating, release_date, backdrop_path } = movieInfo; 
  const roundedRating = Math.round(average_rating); 
  return (
    <div className='movie-details'>
      <div className='left-container'>
        <i class="fas fa-home"></i>
        <div className='top-details'>
          <img src={poster_path} alt='Movie poster' className='details-poster'/>
          <div className='general-info'>
            <h3 className='details-title'>{title}</h3>
            <p className='tagline'>"The flower that blooms.."</p>
            <p><i class="fas fa-star"></i>{roundedRating}/10</p>
            <div className='details-data'>
              <sub>{release_date}</sub><sub>120 minutes</sub>
            </div>
          </div>
        </div>
        <p>OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEWOVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEWOVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEWOVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEWOVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEWOVERVIEW OVERVIEW OVERVIEW OVERVIEW </p>
        <div className='bottom-container'>
          <p className='budget'>Budget: $1M</p>
          <p className='revenue'>Revenue: $1M</p>
          <p className='genres'>Genres: Action</p>
        </div>
      </div>
      <img src={backdrop_path} alt='Movie backdrop' className='backdrop'/>
    </div>
  
  )
} 

export default MovieDetails;


// <p className='budget'>Budget: $1M</p>
// <p className='revenue'>Revenue: $1M</p>
// <p className='genres'>Genres: Action</p>