import React from "react";
import Movie from "../Movie/Movie";
import "./List.css";
import '../Movie/Movie.css';
import { Link } from "react-router-dom";

const  List = ({ movies, onClick, onMouseEnter, onMouseMove, onMouseLeave}) => {
    if (movies) {
      const movieCards = movies.map((movie) => {
        const {posterPath, title, id} = movie;
        const tip = `cursor-${id}`

        return  (
          <Link to={`/${id}`}>
            <img
              className='poster'
              src={posterPath}
              alt={title}
              title={title}
             onClick={onClick}
             id={id}
              key={id}
              onMouseEnter={onMouseEnter}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
          />
          <span className="cursor" id={tip} >{title}
          </span>
        </Link>
        )
    })
  }
}

  export default List;


