const insertMovieReview = (movieTitle, description) => {
    return `
        INSERT INTO density_labs_db.movie_reviews (id, name, description) 
        VALUES(DEFAULT, '${movieTitle}', '${description}')`;
};

module.exports = {
    insertMovieReview
}