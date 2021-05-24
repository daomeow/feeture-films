describe('The Test', () => {
  beforeEach(() => {
    cy.interceptMovies()
  });

  it('should intercept the network request', () => {
    cy.wait('@getStubbed')
      .its('response.statusCode')
      .should('eq', 200)
    });

   it('should provide stubbed data', () => {
    cy.wait('@getStubbed')
    cy.get('.movies-container')
    .get('.card')
    .should('have.length', 8)
    .should('be.visible')
    }); 
  });

describe('List View Loading', () => { 
  beforeEach(() => {
    cy.interceptMovies()
    cy.wait('@getStubbed')
  });
  
  it('should render a loading message while fetching movies', () => {
    cy.visit('/')
    cy.get('h2').contains('Loading Movies...')
  });

  it('should render a header component containing the app name', () => {
    cy.get('header').contains('Feeture🦶🏼Films')
  });

  it('should  not see the home button', () => {
    cy.get('.fa-home')
      .should('not.be.visible') 
  });

  it('should render the list view', () => {
    cy.contains('h1', 'Feeture🦶🏼Films')
    cy.get('.card').should('have.length', 8);
    cy.get('.card').should('have.attr', 'href')
    cy.get('.movies-container').get('#694919').get('[alt="Money Plane"]')
  });

  it('should control mouse state for hover effects', () => {
    cy.get('.movies-container').get('#694919').trigger('mouseenter')
      .should('have.css', 'visibility', 'visible');
   });
});

describe('List View Not Loading', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should display a specific error message when fetch yields a 500 status', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
      .visit('http://localhost:3000/')
      .get('h2')
      .contains('Something went wrong')
  });

  it('should display a specific error message when fetch yields a 404 status', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404
    })
      .visit('http://localhost:3000/')
      .get('h2')
      .contains('Something went wrong')
  });

  it('should redirect the user when they access an invalid URL', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200
    })
      .visit('http://localhost:3000/foo')
      cy.url().should('eq', 'http://localhost:3000/' )
  })
});
