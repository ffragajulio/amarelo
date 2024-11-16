let botao = document.getElementById('enviar');

botao.onclick = async function (event) {
    event.preventDefault()
    let cpfPad = document.getElementById('cpfPad').value;
    let nomePad = document.getElementById('nomePad').value;
    let telefonePad = document.getElementById('telefonePad').value;
    let cepPad = document.getElementById('cepPad').value;
    let cidadePad = document.getElementById('cidadePad').value;
    let logradouroPad = document.getElementById('logradouroPad').value;
    let numero_casaPad = document.getElementById('numero_casaPad').value;
    let complementoPad = document.getElementById('complementoPad').value;
    let senhaPad = document.getElementById('senhaPad').value;

    let dados = { cpfPad, nomePad, telefonePad, cepPad, cidadePad, logradouroPad, numero_casaPad, complementoPad, senhaPad };

    const response = await fetch("http://localhost:3000/api/cadastro/pad", {
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
};