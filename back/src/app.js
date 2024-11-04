const express = require('express');
const dotenv = require('dotenv').config();

const admCadastro = require('./routes/admCadastroRouter');
const admLogin = require('./routes/admLoginRouter')
const admCasos = require('./routes/admCasosRouter')

const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());

app.use('/api', admCadastro);
app.use('/api', admLogin);

module.exports = app;