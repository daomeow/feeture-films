import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


const Header = ({ getMovies }) => {
  return (
    <header>
      <NavLink exact to="/" onClick={getMovies} activeStyle={{ visibility: 'hidden' }}>
        <i className="fas fa-home"></i>
      </NavLink>
      <h1>Rancid Tomatillos</h1>
    </header>
  )
}



export default Header; 