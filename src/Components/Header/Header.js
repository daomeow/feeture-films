import React from 'react';
import { getAllMovies } from '../../apiCalls';
import './Header.css';

const Header = ({ getMovies }) => {
  return (
    <header>
      <i className="fas fa-home visibility"></i>
      <h1>Rancid Tomatillos</h1>
    </header>
  )
}



export default Header; 