// // FUNÇÃO GET

// button.onclick = async function(event) {
//     event.preventDefault()
//     let cadunico = document.getElementById('cadunico').value;

//     let dados = {cadunico, nome, telefone, cidade}

//     const response = await fetch("http://localhost:3000/api/cadastro/adm", {
//         method: "POST",
//         headers: {"Content-type": "application/json;charset=UTF-8"},
//         body: JSON.stringify(dados)
//     })

//     let content = await response.json();
//     console.log(content)

//     if(content.sucess) {
//         alert("Sucesso!")
//     } else {
//         alert("Não foi criado!")
//         console.log(content.sql)
//     }
// }