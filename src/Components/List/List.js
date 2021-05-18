// import { react } from "@babel/types";
// import { render } from "ejs";
import React, { Component } from "react";
import Movie from "../Movie/Movie";
import "./List.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusCard: null,
      x: 0,
      y: 0
    };

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

  render() {
    const movieCards = this.props.movies.map((movie) => (
      <Movie
        posterPath={movie.poster_path}
        title={movie.title}
        onClick={this.props.onClick}
        id={movie.id}
        key={movie.id}
        onMouseEnter={this.handleEnter}
        onMouseMove={this.handleMove}
        onMouseLeave={this.handleLeave}
      />
    ));
    return (
        <div className="movies-container">{movieCards}</div>
    );
  }
}


