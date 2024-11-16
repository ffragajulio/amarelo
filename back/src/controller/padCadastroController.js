const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function cadastroPad(request, response) {
    const params = Array(
        request.body.nomePad,
        request.body.cpfPad,
        request.body.telefonePad,
        request.body.cepPad,
        request.body.cidadePad,
        request.body.logradouroPad,
        request.body.numero_casaPad,
        request.body.complementoPad,
        request.body.senhaPad
    );

    const query = "INSERT INTO padrinho (nome, telefone, cep, cidade, logradouro, numero_casa, complemento, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"

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
    cadastroPad
};