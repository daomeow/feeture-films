describe('Movie details', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
        id: 694919,
        title: "Money Plane",
        poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        release_date: "2020-09-29",
        overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        genres: [
        "Action"
        ],
        budget: 0,
        revenue: 0,
        runtime: 82,
        tagline: "",
        average_rating: 6.142857142857143
    })
    // cy.get('.card>img[id=694919]').click()
    cy.get('.movies-container').get('#694919').click()
  })

  it('should render the clicked movie\'s information', () => {
    // poster path, title, average rating, release date, backdrop path, overview, budget, revenue, genres, tagline, runtime 

    // go to URL >> click movie

    // Start from list's html and move into specific movie? 
  })
})