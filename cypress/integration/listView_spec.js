describe('Movie details', () => {
  beforeEach(() => {
    cy.fixture('movies').then(( data ) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
      statusCode: 200,
      body:  data
    })
    })
      cy.visit('http://localhost:3000/')
  });

  // it('should render a header component containing the app name', () => {
  //   cy.get('header').contains('Rancid Tomatillos')
  // });

  it('should see the home button at this time', () => {
    cy.get('.fa-home')
      .should('be.visible') // change this to 'not.be.visible' after next merge
  });

  it('should render a loading message while fetching movies', () => {
    cy.visit("/")
    cy.get('h2').contains('Loading Movies...')
  });

  it('should render the list view', () => {
    cy.contains('h1', 'Rancid Tomatillos')
    cy.get('.movies-container').should('not.have.length', 0);
  })
//.find('tr').should('have.length', 4)
  // it('should display an error message if the network is down', () => {
    // })

    it('should have a list movies with anchors', () => {
      cy.get('.movies-container')
        .get('.card')
        .should('have.attr', 'href')
    });

    it('should control mouse state for hover effects', () => {
      cy.get('.movies-container').get('#694919').trigger('mouseenter')
      .should('have.css', 'visibility', 'visible');
    })
    //cy.get('.menu-item').trigger('mouseover')

    it('should display a specific error message when fetch yields a 500 status', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 500,
      })
        .visit('http://localhost:3000/')
        .get('h2')
        .contains('Something went wrong')
    });
})