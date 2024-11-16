const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function loginPad(request, response) {
    const params = Array( 
        request.body.cpf,
        request.body.senha
    )

    const query = "SELECT cpf, senha from padrinho where cpf = ? and senha = ?;"

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
    loginPad
};