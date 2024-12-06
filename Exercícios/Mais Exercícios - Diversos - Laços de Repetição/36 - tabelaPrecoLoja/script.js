function exibeTabelaDePrecos(itens){
    console.log('Tabela de Preços - Lojas Quase Dois')
    for (let i=1;i<=50;i++){
        console.log(`${i} - R$ ${(i*1.99).toFixed(2)}`)
    }

    console.log(``)
    console.log(`Quantidade de itens: ${itens}`)
    console.log(`Preço total: R$ ${(itens*1.99).toFixed(2)}`)
}

exibeTabelaDePrecos(3)