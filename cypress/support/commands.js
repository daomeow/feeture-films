import movies from "../fixtures/movies"

const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
Cypress.Commands.add('interceptMovies', () => {
  cy.intercept(baseURL, movies ).as('getStubbed')
    .visit('http://localhost:3000/')
})
