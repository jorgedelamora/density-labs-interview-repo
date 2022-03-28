const {insertMovieReview, getMovieRewiew, getAllMovieReviews } = require('./queries');
const express = require('express');
const app = express();
const mySql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'test1234',
    database: 'density_labs_db'
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/movie-reviews/:name', (req, res) => {
    console.log('HERE');
    const {name} = (req.params);
    db.query(getMovieRewiew(name),(err, results) => {
        if(err) {
            res.send(err);
            return;
        }
        res.send(results);
    });
});

app.get('/api/movie-reviews/', (req, res) => {
    db.query(getAllMovieReviews(),(err, results) => {
        if(err) {
            res.send(err);
            return;
        }
        res.send(results);
    });
});

app.post('/api/movie-reviews', (req, res) => {
    const {movieTitle, description} = req.body;
    db.query(insertMovieReview(movieTitle, description),(err, results) => {
        if(err) {
            res.send(err);
            return;
        }
        res.send(results);
    });
});
 
app.listen(8080, () => {
    console.log('listening on port 8080');
});