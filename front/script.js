let button = document.getElementById("enviar");

button.onclick = async function(event) {
    event.preventDefault()
    let cadunico = document.getElementById('cadunico').value;
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let cidade = document.getElementById('cidade').value;

    let dados = {cadunico, nome, telefone, cidade}

    const response = await fetch("http://localhost:3000/api/store/adm", {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(dados)
    })

    let content = await response.json();

    if(content.sucess) {
        alert("Sucesso!")
    } else {
        alert("Não foi criado!")
        console.log(content.sql)
    }
}