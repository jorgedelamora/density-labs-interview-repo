const {insertMovieReview} = require('./queries');
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

app.post('/api/insert-movie-review', (req, res) => {
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