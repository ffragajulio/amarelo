// const { query } = require('express');
const connection = require('../config/db');
const dotenv = require('dotenv').config();

let cadUnico = localStorage.getItem('cadunico')

async function admCasos(request, response) {
    // const params = Array( 
    //     request.body.id_apadrinhado,
    //     request.body.id_padrinho,
    //     request.body.descricao,
    //     request.body.status
    // )
    
    const query = `SELECT padrinho.nome, apadrinhado.nome FROM casos INNER JOIN padrinho ON padrinho.id = casos.id_padrinho INNER JOIN apadrinhado ON apadrinhado.id = casos.id_apadrinhado WHERE casos.cadunico = ${cadUnico};`
}

// arrumr tabela e terminar get