let button = document.getElementById("cadastrarCaso");

button.onclick = async function(event) {
    event.preventDefault()
    let nomePadrinho = document.getElementById('nomePadrinho').value;
    let cpfPadrinho = document.getElementById('cpfPadrinho').value;
    let nomeApadrinhado = document.getElementById('nomeApadrinhado').value;
    let cpfApadrinhado = document.getElementById('cpfApadrinhado').value;

    let dados = {nomePadrinho, cpfPadrinho, nomeApadrinhado, cpfApadrinhado}

    // ARRUMAR URL
    const response = await fetch("http://localhost:3000/api/cadastro/adm", {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(dados)
    })

    let content = await response.json();
    console.log(content)

    if(content.sucess) {
        alert("Sucesso!")
        window.location.href="../homeAdm/homeAdm.html"
    } else {
        alert("Não foi criado!")
        console.log(content.sql)
    }
}