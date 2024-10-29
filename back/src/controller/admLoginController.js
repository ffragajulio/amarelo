const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function loginAdm(request, response) {
    const params = Array( 
        request.body.cadunico,
        request.body.nome
    )

    const query = "SELECT cadunico, nome from cadastroadm where cadunico = ? and nome = ?;"


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
    loginAdm
}


// const connection = require('../config/db');
// const dotenv = require('dotenv').config();

// async function loginAdm(request, response) {
//         let cadunico = request.body.cadunico;

//         const query = "SELECT cadunico, nome from cadastroadm where cadunico = ?;"

//     connection.query(query, cadunico, (err, results) => {
        
//         let nome = request.body.nome;
//         let nomeQuery = results[0].nome;

    
//         if(nome == nomeQuery) {
//             response.status(200).json({
//                 sucess: true,
//                 message: "Sucesso!",
//                 data: results
//             })
//         } else {
//             response.status(400).json({
//                 sucess: false,
//                 message: "Erro!",
//                 sql: err,
//             })
//         }
//     })
// }

// module.exports = {
//     loginAdm
// }