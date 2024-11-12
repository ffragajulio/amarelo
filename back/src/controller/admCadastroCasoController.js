const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function cadastroCaso(request, response) {
    const params = Array( 
        request.body.nomePadrinho,
        request.body.cpfPadrinho,
        request.body.nomeApadrinhado,
        request.body.cidade
    )

    const query = "INSERT INTO"

    connection.query(query, params, (err, results) => {
        console.log(results)
        if(results) {
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
    cadastroCaso
}