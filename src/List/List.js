import React from 'react';
import Movie from '../Movie/Movie';
import './List.css';

const List = ({movies}) => {
// refactor to not use movie component and simply display posters
// only use the movie component on click of a poster
const movieCards = movies.map(movie => (
    <Movie
       title={movie.title}
       description={movie.description}
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