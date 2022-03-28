const { getTestTable } = require('./queries');
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


app.get('/api/test/', (req, res) => {
    db.query(getTestTable(),(err, results) => {
        if(err) {
            res.send({status: 400,  err});
            return;
        }
        res.send({status: 200,  results});
    });
});

 
app.listen(8080, () => {
    console.log('listening on port 8080');
});