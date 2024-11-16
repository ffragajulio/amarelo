const express = require('express');
const dotenv = require('dotenv').config();

const admCadastro = require('./routes/admCadastroRouter');
const admLogin = require('./routes/admLoginRouter');
const admApadrinhado = require('./routes/admCadastroCasoRouter');
const admCasos = require('./routes/admCadastroCasoRouter');

const padCadastro = require('./routes/padCadastroRouter');
const padLogin = require('./routes/padLoginRouter');

const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());

app.use('/api', admCadastro);
app.use('/api', admLogin);
app.use('/api', admCasos);
app.use('/api', admApadrinhado);


app.use('/api', padCadastro);
app.use('/api', padLogin);

module.exports = app;