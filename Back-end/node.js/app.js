const express = require('express')
const app = express()


var db = {
    host     : 'localhost',
    user     : 'root',
    password : 'toor',
    database : 'SURVEY_ZONE',
    connectionLimit : 10
};

const dbPool = require('mysql').createPool(db);

const port = 3000

app.use(express.json({
    limit: '50mb'
}));


app.get('/', (req, res) => {
    console.log("In")
    res.send('Hello World!');
})

app.get('/download', (req, res) => {
    dbPool.getConnection(function(err, conn) {
        if(!err) {
            conn.query('SELECT * FROM T_SURVEY', function(err,result,fields){
                if(err) throw err;
                res.send(result);
            });
        }
        conn.release();
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})