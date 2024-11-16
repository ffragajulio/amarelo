const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function cadastroApadrinhado(requestApad, responseApad) {
    const params = Array(
        requestApad.body.nomeApadrinhado,
        requestApad.body.cpfApadrinhado,
        requestApad.body.nascimento,
        requestApad.body.instituicao
    )
    console.log(params);

    const query = "INSERT INTO apadrinhado(nome, cpf, dataNasc, instituicao) VALUES (?, ?, ?, ?);"

    connection.query(query, params, (err, results) => {
        console.log(results)
        if(results) {
            responseApad.status(200).json({
                sucess: true,
                message: "Sucesso!apad",
                data: results
            })
        } else {
            responseApad.status(400).json({
                sucess: false,
                message: "Erro!apad",
                sql: err,
            })
        }
    })
}

async function cadastroCaso(request, response) {
    const params = Array(
        request.body.cpfApadrinhado,
        request.body.nomeApadrinhado,
        request.body.cpfPadrinho,
        request.body.nomePadrinho,
        request.body.instituicao,
        request.body.cadunico,
        request.body.descricao
    )

    console.log(params);

    const query = "INSERT INTO casos(cpfApadrinhado, nomeApadrinhado, cpfPadrinho, nomePadrinho, instituicao, cadAssistente, descricao) VALUES (?, ?, ?, ?, ?, ?, ?);"

    connection.query(query, params, (err, results) => {
        console.log(results)
        if(results) {
            response.status(200).json({
                sucess: true,
                message: "Sucesso!caso",
                data: results
            })
        } else {
            response.status(400).json({
                sucess: false,
                message: "Erro!caso",
                sql: err,
            })
        }
    })
}

module.exports = {
    cadastroApadrinhado,
    cadastroCaso
}