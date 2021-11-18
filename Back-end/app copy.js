const cors = require("cors");
const express = require("express");
// const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extends: true,
}));
// Express Server Start
app.listen(port, () => {
    console.log(`Survey-Zone API SERVER listening on port ${port}`);
});