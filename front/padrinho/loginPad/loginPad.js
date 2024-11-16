let button = document.getElementById("enviar");

button.onclick = async function(event) {
    event.preventDefault()
    let cpf = document.getElementById('cpf').value;
    let senha = document.getElementById('senha').value;

    let dados = {cpf, senha}

    const response = await fetch("http://localhost:3000/api/login/pad", {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(dados)
    })

    let content = await response.json();
    console.log(content)

    if(content.sucess) {
        alert("Sucesso!")
        window.location.href="../listaDeTarefasPad/listaPad.html"
    } else {
        alert("Não foi criado!")
        console.log(content.sql)
    }
}