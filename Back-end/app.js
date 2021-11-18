const cors = require("cors");
const express = require("express");

const route = require('./routes/route');

const app = express();
// const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
app.use(express.urlencoded({
    extends: true,
}));
app.use(route);


module.exports = app;