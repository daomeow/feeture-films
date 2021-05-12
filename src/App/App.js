import React, { Component } from 'react';
import movieData from '../sample-data';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    // view: list or movie
    }
  }
  
  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>touch 
        <List movies={this.state.movies} />
        </main>
          )
    }
}