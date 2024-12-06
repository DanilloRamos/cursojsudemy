function caixaRegistradora() {
    while (true) {
        let totalCompra = 0;
        let cont = 1;
        let detalhesCompra = "Lojas Tabajara\n"; // Acumulador para exibição dos produtos

        while (true) {
            let precoProduto = prompt(`Produto ${cont}: R$ `);
            let precoFinal = parseFloat(precoProduto);

            if (isNaN(precoFinal) || precoFinal < 0) {
                alert("Por favor, insira um valor válido.");
                continue;
            }

            detalhesCompra += `Produto ${cont}: R$ ${precoFinal.toFixed(2)}\n`;
            totalCompra += precoFinal;
            cont++;

            if (precoFinal === 0) {
                break; // Finaliza a entrada de produtos
            }
        }

        // Exibição do total e cálculo do troco
        detalhesCompra += `Total: R$ ${totalCompra.toFixed(2)}\n`;
        console.log(detalhesCompra);

        let valorAPagar = prompt(`Dinheiro: R$ `);
        let valor = parseFloat(valorAPagar);

        while (isNaN(valor) || valor < totalCompra) {
            alert("Valor insuficiente ou inválido. Tente novamente.");
            valorAPagar = prompt(`Dinheiro: R$ `);
            valor = parseFloat(valorAPagar);
        }

        console.log(`Dinheiro: R$ ${valor.toFixed(2)}`);
        console.log(`Troco: R$ ${(valor - totalCompra).toFixed(2)}\n`);

        // Perguntar se deseja registrar outra compra
        let novaCompra = prompt("Deseja registrar outra compra? (s/n)").toLowerCase();

        if (novaCompra !== 's') {
            console.log("Obrigado por usar a Lojas Tabajara!");
            break; // Sai do loop principal
        }

        console.clear(); // Limpa o console para nova compra
    }
}

caixaRegistradora();
