const {insertMovieReview} = require('./queries');
const express = require('express');
const app = express();
const mySql = require('mysql');

const db = mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'test1234',
    database: 'density_labs_db'
});


app.get('/insert-movie-review', (req, res) => {
    
    db.query(insertMovieReview('inception', 'this is a really cool movie'),(err, results, fields) => {
        if(err) {
            console.error('ERROR!', err);
            res.send('ERROR');
            return;
        }
        console.log(results);
        res.send('DONE');
    });
});
 
app.listen(8080, () => {
    console.log('listening on port 8080');
});