import { 
  getAllMovies, 
  findMovie,
  formatOrder, 
  formatRating, 
  yearOnly, 
  formatAmount, 
  formatList 
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
    
  })
})