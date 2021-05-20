describe('List view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', cy.fixture('movies.json')).as("getMovies")
    cy.visit("/")
    
  })
  
  it('should render movies on the main page', () => {
    // cy.wait("@getMovies")
    cy.contains('h1', 'Rancid Tomatillos')
    cy.get('.movies-container').should('be.visible')
  })
})