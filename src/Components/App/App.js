import React, { Component } from 'react';
import List from '../List/List';
import './App.css';
// import movieData from '../../sample-data';
import MovieDetails from '../MovieDetails/MovieDetails';
// import { json } from 'body-parser';
import { getAllMovies, findMovie } from '../../apiCalls';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      clickedMovie: null,
      error: ''
    }
  }
  
  handleClick = (id) => {
    findMovie(id)
      .then(movie => {
        this.setState({ clickedMovie: movie.movie })
      })
      .catch(error => this.setState({ error }))
  }

  componentDidMount() {
    getAllMovies()
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(error => this.setState({ error: "Something went wrong" }))
  }

  render() {
    return (
      <main className='App'>
        <header>
          <i className="fas fa-home"></i>
          <h1>Rancid Tomatillos</h1>
        </header>

        {this.state.error && !this.state.movies.length &&
          <h2>{this.state.error}</h2>
        }
        {this.state.clickedMovie &&
          <MovieDetails
            movieInfo={this.state.clickedMovie}
          />
        }
        {!this.state.movies.length && !this.state.error &&
          <h2>Loading Movies...</h2>
        }
        {!this.state.error && !this.state.clickedMovie &&
          <List 
            movies={this.state.movies} 
            onClick={this.handleClick}  
          />
        } 
      </main>
    )
  }
}

