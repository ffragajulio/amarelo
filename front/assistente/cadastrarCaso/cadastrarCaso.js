let button = document.getElementById("cadastrarCaso");
let cadunico = localStorage.getItem('cadunico');
console.log(cadunico);

button.onclick = async function(event) {
    event.preventDefault()
    let nomePadrinho = document.getElementById('nomePadrinho').value;
    let cpfPadrinho = document.getElementById('cpfPadrinho').value;
    let nomeApadrinhado = document.getElementById('nomeApadrinhado').value;
    let cpfApadrinhado = document.getElementById('cpfApadrinhado').value;
    let instituicao = document.getElementById('instituicao').value;
    let nascimento = document.getElementById('nascimento').value;
    let descricao = document.getElementById('descricao').value;
    
    let dadosApadrinhado = {nomeApadrinhado, cpfApadrinhado, nascimento, instituicao}
    let dados = {nomePadrinho, cpfPadrinho, nomeApadrinhado, cpfApadrinhado, instituicao, cadunico, descricao}    

    const responseApadrinhado = await fetch("http://localhost:3000/api/cadastroApadrinhado/adm", {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(dadosApadrinhado)
    })
    let contentApadrinhado = await responseApadrinhado.json();
    console.log(contentApadrinhado)
    
    if(contentApadrinhado.sucess) {
        alert("Sucesso! apad")
        window.location.href="../casosAdm/casosAdm.html"
    } else {
        alert("Não foi criado! apad")
        console.log(contentApadrinhado.sql)
        return;
    }
    
    
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