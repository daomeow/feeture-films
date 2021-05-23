import './App.css';
import Header from '../Header/Header';
import List from '../List/List';
import MovieDetails from '../MovieDetails/MovieDetails';
import React, { Component } from 'react';
import { getAllMovies, findMovie } from '../../apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';

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
      <main className='App' title="App">
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
                this.state.clickedMovie && !this.state.error &&
                <MovieDetails
                  movieInfo={this.state.clickedMovie}
                  id={id}
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


