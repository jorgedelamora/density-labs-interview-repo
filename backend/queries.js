const insertMovieReview = (movieTitle, description) => {
    return `
        INSERT INTO density_labs_db.movie_reviews (id, name, description) 
        VALUES(DEFAULT, '${movieTitle}', '${description}')`;
};

const getMovieRewiew = (movieTitle) => {
    return `SELECT * FROM density_labs_db.movie_reviews WHERE name = '${movieTitle}'`;
};

const getAllMovieReviews = () => {
    return `SELECT * FROM density_labs_db.movie_reviews`;
};

module.exports = {
    insertMovieReview,
    getMovieRewiew,
    getAllMovieReviews
}