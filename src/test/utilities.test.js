import { 
  getAllMovies, 
  findMovie,
  formatOrder, 
  formatRating, 
  yearOnly, 
  formatAmount, 
  formatList,
  filterMoviesData 
} from './../utilities';

import movieData from './../sample-data';
let movies;
describe('Utilities', () => {

  it('should get all movies', () => {
    getAllMovies()
      .then(data => {
        [ ...movies ] = data.movies
        expect(movies).toEqual(movieData.movies);
      })
  });

  it('should find a specific movie', () => {
    findMovie(694919)
      .then(data => {
         const { title } = data
         expect(title).toEqual('Money Plane')
      })
  });

  it('should organize the movies alphabetically', () => {
    expect(formatOrder(movieData.movies)[0].title).toEqual('2067')
    expect(formatOrder(movieData.movies)[39].title).toEqual('Trolls World Tour')
  });

  it('should format the rating data', () => {
    expect(formatRating(6.142857142857143)).toEqual(6)
  });

  it('should format release date', () => {
    expect(yearOnly('2020-09-29')).toEqual('2020')
  });

  it('should format the budget data', () => {
    expect(formatAmount(0)).toEqual("0")
  });

  it('should format the list of genres', () => {
    expect(formatList(['Action', 'Comedy', 'Horror'])).toEqual('Action, Comedy, Horror')
  });

  it('should only have an id, poster image and a title', () => {
    expect(filterMoviesData(movieData)[0]).toEqual({
      id: 528085,
      poster_path: 'https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg', 
      title: '2067'
    })
  })
})