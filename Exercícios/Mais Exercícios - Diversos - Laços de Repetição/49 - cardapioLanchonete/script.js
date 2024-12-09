function cardapioLanchonete() {
    const codigosValidos = [100, 101, 102, 103, 104, 105];
    const precos = {
        100: 1.2,
        101: 1.3,
        102: 1.5,
        103: 1.2,
        104: 1.3,
        105: 1.0,
    };

    let totalPedido = 0;
    const totais = {
        100: 0, // Cachorro Quente
        101: 0, // Bauru Simples
        102: 0, // Bauru com Ovo
        103: 0, // Hamburguer
        104: 0, // Cheese Burguer
        105: 0, // Refrigerante
    };

    while (true) {
        // Obter entrada do usuário
        let codigo = parseInt(prompt("Informe o código do seu pedido ou 0 para encerrar:"));
        
        // Verificar se o código é 0 para encerrar
        if (codigo === 0) break;

        // Validar código
        while (!codigosValidos.includes(codigo)) {
            codigo = parseInt(prompt("Código Inválido. Por favor, informe um código válido:"));
        }

        // Obter quantidade
        const quantidade = parseInt(prompt("Informe a quantidade desejada:"));

        // Calcular o valor do pedido
        totais[codigo] += precos[codigo] * quantidade;
        totalPedido += precos[codigo] * quantidade;
    }

    // Exibir o resumo do pedido
    console.log(`Total do pedido: R$ ${totalPedido.toFixed(2)}`);
    console.log("Total por item:");

    for (const [codigo, valor] of Object.entries(totais)) {
        if (valor > 0) {
            let descricao;
            switch (parseInt(codigo)) {
                case 100: descricao = "Cachorro Quente"; break;
                case 101: descricao = "Bauru Simples"; break;
                case 102: descricao = "Bauru com Ovo"; break;
                case 103: descricao = "Hamburguer"; break;
                case 104: descricao = "Cheese Burguer"; break;
                case 105: descricao = "Refrigerante"; break;
            }
            console.log(`${descricao}: R$ ${valor.toFixed(2)}`);
        }
    }
}

// Exibir o cardápio
console.log(`${"Especificação".padEnd(25)} ${"Código".padEnd(10)} ${"Preço"}`);
console.log(`${"Cachorro Quente".padEnd(25)} ${"100".padEnd(10)} R$ 1,20`);
console.log(`${"Bauru Simples".padEnd(25)} ${"101".padEnd(10)} R$ 1,30`);
console.log(`${"Bauru com Ovo".padEnd(25)} ${"102".padEnd(10)} R$ 1,50`);
console.log(`${"Hamburguer".padEnd(25)} ${"103".padEnd(10)} R$ 1,20`);
console.log(`${"Cheese Burguer".padEnd(25)} ${"104".padEnd(10)} R$ 1,30`);
console.log(`${"Refrigerante".padEnd(25)} ${"105".padEnd(10)} R$ 1,00`);

// Chamar a função principal
cardapioLanchonete();
