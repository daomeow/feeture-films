import './App.css';
import Header from '../Header/Header';
import List from '../List/List';
import Movie from '../Movie/Movie';
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
      error: '',
      focusCard: null,
      x: 0,
      y: 0
    }
  }

  handleEnter = (id) => {
    this.setState({ focusCard: id })
  }

  handleMove = (e, id) => {
    const oX = (e.nativeEvent.offsetX)
    const oY = (e.nativeEvent.offsetY)
    this.setState({ 
      x: oX,
      y: oY
    })
    const tooltip = document.getElementById(`cursor-${id}`)
    tooltip.style.top = (this.state.y + 20) + "px";
    tooltip.style.left = (this.state.x + 20) + "px";
  }

  handleLeave = () => {
    this.setState({ 
      focusCard: null,
      x: 0,
      y: 0
    })
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
              
              : <List   movies={this.state.movies}       
                  onClick={this.handleClick}
                  onMouseEnter={this.handleEnter}
                  onMouseMove={this.handleMove}
                  onMouseLeave={this.handleLeave}
              />
              
              


              // </List
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
          {/* <Redirect to={{pathname:"/"}} /> */}
        </Switch>
      </main>
    )
  }
}
