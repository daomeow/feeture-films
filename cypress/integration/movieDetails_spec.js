describe('The Test', () => {
  beforeEach(() => {
    cy.interceptMovies()
    cy.interceptSingleMovie()
  });

  it('should intercept the network request', () => {
    cy.wait('@getSingleStub')
      .its('response.statusCode')
      .should('eq', 200)
    });

   it('should provide stubbed data', () => {
    cy.wait('@getSingleStub')
    cy.get('.movie-details')
    .get('.left-container')
    .contains('Money Plane')
    .should('be.visible')
    }); 
  });

describe('Movie Details Loading', () => {
  beforeEach(() => {
    cy.interceptMovies()
  });
  
  it('should render a loading message while fetching movies', () => {
    cy.get('.movies-container').get('#694919').click()
    cy.get('h2').contains(`Loading Movie's Details...`)
  });

  it('should render a header component containing the app name', () => {
    cy.interceptSingleMovie()
    cy.get('header').contains('Feeture🦶🏼Films')
  });

  it('should see the home button', () => {
    cy.interceptSingleMovie()
    cy.get('.fa-home')
      .should('be.visible') 
  });

  it('should render the clicked movie\'s information', () => {
    cy.interceptSingleMovie()
    cy.wait('@getSingleStub')
    cy.contains('h3', 'Money Plane')
      .get('.movie-poster').should('be.visible')
      .get('.tagline').should('contain', '')
      .get('.movie-rating').should('contain', 6)
      .get('.year-details').should('contain', 2020)
      .get('.budget').should('contain', 'unknown')
      .get('.revenue').should('contain', 'unknown')
      .get('.genres').should('contain', 'Action')
  })

  it('should have a button take user to main page', () => {
    cy.interceptSingleMovie()
    cy.get('.fa-home').click()
    cy.url().should('eq', 'http://localhost:3000/' )
  });
})