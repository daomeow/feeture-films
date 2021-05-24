import './App.css';
import Header from '../Header/Header';
import List from '../List/List';
import MovieDetails from '../MovieDetails/MovieDetails';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { 
  getAllMovies, 
  findMovie,
  filterMoviesData,
  formatOrder, 
  formatRating, 
  yearOnly, 
  formatAmount, 
  formatList,
  test 
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
      .catch(error => this.setState({ error: "Not a valid path - redirecting to home" }))
  }

  componentDidMount() {
    getAllMovies()
      .then(data => {
        const filteredData = filterMoviesData(data)
        this.setState({ movies: formatOrder(filteredData) })
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
          <Route exact path="/:id"
            render={({ match }) => {
              const id = match.params.id
              this.handleClick(id)
              return (
                !this.state.clickedMovie && !this.state.error ?
                  <h2>Loading Movie's Details...</h2>

                : this.state.clickedMovie && !this.state.error &&
                <MovieDetails
                  movieInfo={this.state.clickedMovie}
                />
                )
              }}
          />
        </Switch>
        <Redirect to="/" />
      </main>
    )
  }
}


