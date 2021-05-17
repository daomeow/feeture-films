import React from 'react';
import './MovieDetails.css';

const MovieDetails =({ movieInfo }) => {
  const { poster_path, title, average_rating, release_date, backdrop_path, overview, budget, revenue, genres, tagline, runtime } = movieInfo; 
  const roundedRating = Math.round(average_rating); 
  const yearOnly = release_date.split('-').shift();
  const newBudget = budget.toLocaleString();
  const newRevenue = revenue.toLocaleString();
  const newGenres = genres.join(', ');

  return (
    <div className='movie-details'>
      <div className='left-container'>
        <i className="fas fa-home"></i>
        <div className='top-details'>
          <img src={poster_path} alt='Movie poster' className='details-poster'/>
          <div className='general-info'>
            <h3 className='details-title'>{title}</h3>
            <p className='tagline'>{tagline}</p>
            <p className='movie-rating'><i className="fas fa-star"></i>{roundedRating}/10</p>
            <div className='details-data'>
              <sub className='year-details'>{yearOnly}</sub><sub  className='minutes-details'>{runtime} minutes</sub>
            </div>
          </div>
        </div>
        <p className='over-view'>{overview}</p>
        <div className='bottom-container'>
          <p className='budget'>Budget: {budget > 0 ? '$' + newBudget : 'unknown'}</p>
          <p className='revenue'>Revenue: {budget > 0 ? '$' + newRevenue : 'unknown'}</p>
          <p className='genres'>Genres: {newGenres}</p>
        </div>
      </div>
      <img src={backdrop_path} alt='Movie backdrop' className='backdrop'/>
    </div>
  )
} 

export default MovieDetails;








