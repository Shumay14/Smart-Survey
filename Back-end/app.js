const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = {
    host: "surveyzone.cqqcyxlpgd6h.ap-northeast-2.rds.amazonaws.com",
    user: "corgi",
    password: "corgi123!",
    database: "surveyzone",
    connectionLimit: 10,
};

const dbPool = require("mysql").createPool(db);


// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use(
    express.urlencoded({
        extends: true,
    })
);
// Express Server Start
app.listen(port, () => {
    console.log(`Survey-Zone API SERVER listening on port ${port}`);
});


// GET Methods START
app.get("/", (req, res) => {
    res.send("API SERVER OPEN");
});
// 4750 0630

app.get("/api/survey", (req, res) => {
    dbPool.getConnection(function (err, conn) {
        if (!err) {
            conn.query("SELECT * FROM T_SURVEY " + req.query.sqlQuery, function (err, result, fields) {
                if (err) throw err;
                console.log("reserved query : ", req.query.sqlQuery);
                res.send(result);
            });
        }
        conn.release();
    });
});


app.get("/api/survey/interest", (req, res) => {
    var where = req.body;
    dbPool.getConnection(function (err, conn) {
        if (!err) {
            conn.query("SELECT * FROM T_USER WHERE", function (err, result, fields) {
                if (err) throw err;
                res.send(result);
            });
        }
        conn.release();
    });
});
// GET Methods END

// POST Method START
app.post("/", (req, res) => {
    //x-www-form-urlencoded
    console.log(req.body);
    res.send(req.body);
});

app.post("/api/survey", (req, res) => {
    dbPool.getConnection(function (err, conn) {
        var param = Object.keys(req.body)[0];

        if (!err) {
            conn.query(
                "INSERT INTO T_SURVEY SET item = ?",
                param,
                function (err, result, fields) {
                    if (err) throw err;
                    res.send(result);
                }
            );
        }
    });
});
// 아직 미완
app.post("/api/category", (req, res) => {
    dbPool.getConnection(function (err, conn) {
        var param = {
            item: req.body,
        };

        console.log(param);

        console.log(req.body);
        console.log(param.item, typeof param.item);

        if (!err) {
            conn.query(
                "INSERT INTO T_SURVEY SET ?",
                param,
                function (err, result, fields) {
                    if (err) throw err;
                    res.send(result);
                }
            );
        }
    });
});
// POST Method END

const req = {
    async db(alias, param = [], where = '') {
        return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param, (error, rows) => {
            if (error) {
                if (error.code != 'ER_DUP_ENTRY')
                    console.log(error);
                resolve({
                    error
                });
            } else resolve(rows);
        }));
    }
};