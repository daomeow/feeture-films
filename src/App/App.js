import React, { Component } from 'react';
import List from '../List/List';
import './App.css';
import movieData from '../sample-data';
import MovieDetails from '../MovieDetails/MovieDetails';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      clickedMovie: null
    }
  }
  
  handleClick = (id) => {
    const currentMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({ clickedMovie : currentMovie});
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.clickedMovie ?
        <MovieDetails
        />
        :<List 
          movies={this.state.movies} 
          onClick={this.handleClick}  
        />
        } 
      </main>
    )
  }
}

