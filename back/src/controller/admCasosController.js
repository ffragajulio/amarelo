const connection = require('../config/db');
const dotenv = require('dotenv').config();

let cadUnico = localStorage.getItem('cadunico')

async function admCasos(request, response) {
    
    const query = `SELECT padrinho.nome, apadrinhado.nome FROM casos INNER JOIN padrinho ON padrinho.id = casos.id_padrinho INNER JOIN apadrinhado ON apadrinhado.id = casos.id_apadrinhado WHERE casos.cadunico = ${cadUnico};`

    connection.query(query, params, (err, results) => {
        console.log(results)
        if(results.length != 0) {
            response.status(200).json({
                sucess: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            response.status(400).json({
                sucess: false,
                message: "Erro!",
                sql: err,
            })
        }
    })

}

module.exports = {
    admCasos
};