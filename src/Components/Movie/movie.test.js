import * as React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Movie from './movie';
let movies = {
  "movies": [
    {
      "id": 694919,
      "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      "title": "Money Plane",
      "average_rating": 6.142857142857143,
      "release_date": "2020-09-29"
    },
    {
      "id": 337401,
      "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      "title": "Mulan",
      "average_rating": 5.2727272727272725,
      "release_date": "2020-09-04"
    }
  ]
}

describe('Movie Component', () => {
  test('renders the correct content', () => {
    const history = createMemoryHistory()
    const movieCards = movies.movies.map((movie) => {
      const { getByAltText } = render(
        <Router history={history}>
          <Movie
            posterPath={movie.poster_path}
            title={movie.title}
            id={movie.id}
            key={movie.id}
          />
      </Router>
      );
      getByAltText('Money Plane');
    })
  })
});