import React from 'react';
import Movie from '../Movie/Movie';
import './List.css';

const List = ({movies, onClick}) => {
  const movieCards = movies.map(movie => (
    <Movie
      posterPath={movie.poster_path}
      title={movie.title}
      onClick={onClick} // this should be adjusted
      id={movie.id}
      key={movie.id}
    />
  ))

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}

 export default List;