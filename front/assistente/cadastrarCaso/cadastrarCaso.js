let button = document.getElementById("cadastrarCaso");
let cadunico = localStorage.getItem('cadunico');
console.log(cadunico);
button.onclick = async function(event) {
    event.preventDefault()
    let nomePadrinho = document.getElementById('nomePadrinho').value;
    let cpfPadrinho = document.getElementById('cpfPadrinho').value;
    let nomeApadrinhado = document.getElementById('nomeApadrinhado').value;
    let cpfApadrinhado = document.getElementById('cpfApadrinhado').value;
    let instituicaoApadrinhado = document.getElementById('instituicaoApadrinhado').value;
    
    

    let dados = {nomePadrinho, cpfPadrinho, nomeApadrinhado, cpfApadrinhado, instituicaoApadrinhado, cadunico}
    
    

    const response = await fetch("http://localhost:3000/api/cadastroCaso/adm", {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(dados)
    })

    let content = await response.json();
    console.log(content)

    if(content.sucess) {
        alert("Sucesso!")
        window.location.href="../casosAdm/casosAdm.html"
    } else {
        alert("Não foi criado!")
        console.log(content.sql)
    }
}