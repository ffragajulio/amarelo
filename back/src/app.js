const express = require('express');
const dotenv = require('dotenv').config();
const admRouter = require('./routes/admRouter');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());
app.use('/api', admRouter);

module.exports = app;