export const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
}

export const findMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
}

export const filterMoviesData = (list) => {
  list.movies.map(movie => {
    delete movie.average_rating;
    delete movie.release_date;
    delete movie.backdrop_path;
  })

  return list.movies
}

export const formatOrder = (list) => list.sort((a, b) => (a.title > b.title) ? 1 : -1);

export const formatRating = (rate) => Math.round(rate);

export const yearOnly = (date) => date.split('-').shift();

export const formatList = (list) => list.join(', ');

export const formatAmount = (item) => item.toLocaleString();
