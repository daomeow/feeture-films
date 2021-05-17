// import { react } from "@babel/types";
// import { render } from "ejs";
import React, { Component } from "react";
import Movie from "../Movie/Movie";
import "./List.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const movieCards = this.props.movies.map((movie) => (
      <Movie
        posterPath={movie.poster_path}
        title={movie.title}
        onClick={this.props.onClick} // this should be adjusted
        id={movie.id}
        key={movie.id}
      />
    ));

    return <div className="movies-container">{movieCards}</div>;
  }
}


