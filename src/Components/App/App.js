import React, { Component } from 'react';
import List from '../List/List';
import './App.css';
import movieData from '../../sample-data';
import MovieDetails from '../MovieDetails/MovieDetails';
import { json } from 'body-parser';
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
      const info = movie.movie
      console.log(info)
      this.setState({
        clickedMovie: info 
        // {
        //   average_rating: info.average_rating,
        //   backdrop_path: info.backdrop_path,
        //   budget: this.numberWithCommas(info.budget),
        //   genres: info.genres.join(', '), id: info.id,
        //   overview: info.overview,
        //   poster_path: info.poster_path,
        //   release_date: info.release_date,
        //   revenue: this.numberWithCommas(info.revenue),
        //   runtime: info.runtime, tagline: info.tagline,
        //   title: info.title
        // }
      })
    })
    .catch(error => this.setState({ error }))
  }

  componentDidMount() {
    getAllMovies()
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
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

