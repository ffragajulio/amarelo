let button = document.getElementById("enviar");

button.onclick = async function(event) {
    event.preventDefault()
    let cadunico = document.getElementById('cadunico').value;
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let cidade = document.getElementById('cidade').value;


 fetch(`https://cfess-br.implanta.net.br/visaonacional/api/nacional/registros-nacionais?numeroRegistro=${cadunico}&idConselho=b81219f6-05e0-4907-a268-4d61b8c04f66`, {
        mode:"no-cors"
    }).then(function(data) {
        console.log(data.json())
    });
    // const result = await response.json();

    // console.log(result)




    // let dados = {cadunico, nome, telefone, cidade}

    // const response = await fetch("http://localhost:3000/api/store/adm", {
    //     method: "POST",
    //     headers: {"Content-type": "application/json;charset=UTF-8"},
    //     body: JSON.stringify(dados)
    // })

    // let content = await response.json();

    // if(content.sucess) {
    //     alert("Sucesso!")
    // } else {
    //     alert("Não foi criado!")
    //     console.log(content.sql)
    // }
}
