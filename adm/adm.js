function mostrarValores() {
    // Captura os valores dos campos de input
    var cfess = document.getElementById("cfess").value;
    var nome = document.getElementById("nome").value;

    // Exibe um alert com os valores capturados
    alert("Valor 1: " + cfess + "\nValor 2: " + nome);
}

`https://cfess-br.implanta.net.br/visaonacional/api/nacional/registros-nacionais?pageNumber=1&pageSize=50&ignorePagination=false&idRegistroNacional=${cfess}&nome=${nome}`