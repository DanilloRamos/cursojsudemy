function exibeTabelaDePrecosPadaria(precoDoPao){
    
    console.log(`Preço do pão: R$ ${precoDoPao}`)
    console.log('Panificadora Pão de Ontem - Tabela de preços')

    for (let i=0;i<50;i++){
        console.log(`${i+1} - R$ ${((i+1)*precoDoPao).toFixed(2)}`)
    }
}

exibeTabelaDePrecosPadaria(0.18)