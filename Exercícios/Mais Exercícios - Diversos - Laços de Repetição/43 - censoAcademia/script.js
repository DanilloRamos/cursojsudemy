function censoAcademia() {
    let maisBaixo = Infinity;
    let maisAlto = -Infinity;
    let maisGordo = -Infinity;
    let maisMagro = Infinity;
    let somaAlturas = 0;
    let somaPesos = 0;

    let clienteMaisBaixo = null;
    let clienteMaisAlto = null;
    let clienteMaisGordo = null;
    let clienteMaisMagro = null;

    let armazenaCadastro = [];

    while (true) {
        let codigoCliente = parseInt(prompt('Digite o seu código: '));
        while (isNaN(codigoCliente) || codigoCliente <= 0) {
            codigoCliente = parseInt(prompt('Código inválido. Digite o seu código: '));
        }

        let nome = prompt('Digite o seu nome: ');

        let altura = parseFloat(prompt('Digite sua altura: '));
        while (isNaN(altura) || altura <= 0) {
            altura = parseFloat(prompt('Altura inválida. Digite uma altura válida: '));
        }

        let peso = parseFloat(prompt('Informe seu peso: '));
        while (isNaN(peso) || peso <= 0) {
            peso = parseFloat(prompt('Peso inválido. Digite um peso válido: '));
        }

        let cadastro = { codigoCliente, nome, altura, peso };
        armazenaCadastro.push(cadastro);

        somaAlturas += altura;
        somaPesos += peso;

        // Verificar extremos
        if (altura > maisAlto) {
            maisAlto = altura;
            clienteMaisAlto = cadastro;
        }
        if (altura < maisBaixo) {
            maisBaixo = altura;
            clienteMaisBaixo = cadastro;
        }
        if (peso > maisGordo) {
            maisGordo = peso;
            clienteMaisGordo = cadastro;
        }
        if (peso < maisMagro) {
            maisMagro = peso;
            clienteMaisMagro = cadastro;
        }

        let encerra;
        do {
            encerra = parseInt(prompt('Se desejar encerrar o cadastro, digite 0. Para continuar, digite 1:'));
        } while (isNaN(encerra) || (encerra !== 0 && encerra !== 1));

        if (encerra === 0) {
            console.log('Encerrando...');
            console.log('Exibindo dados:');

            armazenaCadastro.forEach(cliente => {
                console.log(`Nome: ${cliente.nome}, Código: ${cliente.codigoCliente}, Altura: ${cliente.altura}, Peso: ${cliente.peso}`);
            });

            console.log('');
            console.log(`Cliente mais alto: Código ${clienteMaisAlto.codigoCliente}, Altura: ${clienteMaisAlto.altura}`);
            console.log(`Cliente mais baixo: Código ${clienteMaisBaixo.codigoCliente}, Altura: ${clienteMaisBaixo.altura}`);
            console.log(`Cliente mais gordo: Código ${clienteMaisGordo.codigoCliente}, Peso: ${clienteMaisGordo.peso}`);
            console.log(`Cliente mais magro: Código ${clienteMaisMagro.codigoCliente}, Peso: ${clienteMaisMagro.peso}`);
            console.log(`Média de altura: ${(somaAlturas / armazenaCadastro.length).toFixed(2)}`);
            console.log(`Média de peso: ${(somaPesos / armazenaCadastro.length).toFixed(2)}`);
            break;
        }
    }
}

censoAcademia();