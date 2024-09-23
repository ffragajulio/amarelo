const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeAdm(request, response) {
    const params = Array( 
        request.body.cadunico,
        request.body.nome,
        request.body.telefone,
        request.body.cidade
    )

    const query = "INSERT INTO cadastroADM(cadunico, nome, telefone, cidade) VALUES(?, ?, ?, ?)"

    connection.query(query, params, (err, results) => {
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

async function getAdm(request, response) {
    const query = "SELECT * FROM cadastroadm"

    connection.query(query, params, (err, results) => {
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
    storeAdm,
    getAdm
}