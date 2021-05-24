import movies from "../fixtures/movies"
import singleMovie from "../fixtures/single-movie"

const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
Cypress.Commands.add('interceptMovies', () => {
  cy.intercept(baseURL, movies ).as('getStubbed')
    .visit('http://localhost:3000/')
})

Cypress.Commands.add('interceptSingleMovie', () => {
  cy.get('.movies-container').get('#694919').click()
  cy.intercept(`${baseURL}/694919`, singleMovie).as('getSingleStub')
    // .visit('http://localhost:3000/')
})