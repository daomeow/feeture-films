import React from 'react';
import './MovieDetails.css';

const MovieDetails =({ movieInfo }) => {
  const { poster_path, title, average_rating, release_date, backdrop_path, overview, budget, revenue, genres, tagline, runtime } = movieInfo; 

  return (
    <div className='movie-details'>
      <div className='left-container'>
        <div className='top-details'>
          <img src={poster_path} alt='Movie poster' className='movie-poster'/>
          <div className='general-info'>
            <h3 className='movie-title'>{title}</h3>
            <p className='tagline'>{tagline}</p>
            <p className='movie-rating'><i className="fas fa-star"></i>{average_rating}/10</p>
            <div className='details-data'>
              <sub className='year-details'>{release_date}</sub><sub  className='minutes-details'>{runtime} minutes</sub>
            </div>
          </div>
        </div>
        <p className='over-view'>{overview}</p>
        <div className='bottom-container'>
          <p className='budget'>Budget: {budget > 0 ? '$' + budget : 'unknown'}</p>
          <p className='revenue'>Revenue: {budget > 0 ? '$' + revenue : 'unknown'}</p>
          <p className='genres'>Genres: {genres}</p>
        </div>
      </div>
      <img src={backdrop_path} alt='Movie backdrop' className='backdrop'/>
    </div>
  )
} 

export default MovieDetails;








