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
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  express.urlencoded({
    extends: true,
  })
);

// GET Methods START
app.get("/", (req, res) => {
  res.send("API SERVER OPEN");
});

app.get("/api/survey", (req, res) => {
  var where = req.body;
  dbPool.getConnection(function (err, conn) {
    if (!err) {
      conn.query("SELECT * FROM T_SURVEY", function (err, result, fields) {
        if (err) throw err;
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
      conn.query("SELECT * FROM T_USER", function (err, result, fields) {
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
    var param = {
      item: Object.keys(req.body)[0],
    };

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

// Express Server Start
app.listen(port, () => {
  console.log(`Survey-Zone API SERVER listening on port ${port}`);
});
