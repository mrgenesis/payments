

require('dotenv').config();
const express = require('express');
const app = express();


app.use(express.json());
app.use('/', express.static(__dirname + "../../../view"));
require('./routes/index')(app);

module.exports = app;