import './App.css';
import Header from '../Header/Header';
import List from '../List/List';
import MovieDetails from '../MovieDetails/MovieDetails';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { 
  getAllMovies, 
  findMovie, 
  formatRating, 
  yearOnly, 
  formatAmount, 
  formatList 
} from '../../utilities';


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
        // const { movie } = movieData
        console.log(movie.movie.id)
        this.setState({
          clickedMovie: {
          id: movie.movie.id,
          title: movie.movie.title,
          poster_path: movie.movie.poster_path,
          backdrop_path: movie.movie.backdrop_path,
          release_date: yearOnly(movie.movie.release_date), 
          overview: movie.movie.overview, 
          genres: formatList(movie.movie.genres),
          budget: formatAmount(movie.movie.budget), 
          revenue: formatAmount(movie.movie.revenue), 
          runtime: movie.movie.runtime,
          tagline: movie.movie.tagline, 
          average_rating: formatRating(movie.movie.average_rating)
         }
        })
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
        <Header>
          getMovies={this.componentDidMount}
        </Header>

        <Switch>
          <Route exact path="/"
            render={() => (
              !this.state.movies.length && !this.state.error ?
              <h2>Loading Movies...</h2>
              
              : this.state.error && !this.state.movies.length ?
              <h2>{this.state.error}</h2>
              
              : <List 
              movies={this.state.movies} 
              onClick={this.handleClick}  
              />
              )}
          />
          
          <Route path="/:id"
            render={() => {
              return (
                this.state.clickedMovie && !this.state.error &&
                <MovieDetails
                movieInfo={this.state.clickedMovie}
                />
                )
              }}
          />
          {/* <Redirect to="/" /> */}
        </Switch>
      </main>
    )
  }
}


