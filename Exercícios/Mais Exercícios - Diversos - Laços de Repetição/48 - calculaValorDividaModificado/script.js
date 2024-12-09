function calculaDivida (valor, parcelas){
    
    //let juros
    //let valorParcela
    const formatarReais = (valor) => `R$ ${valor.toFixed(2).replace('.',',')}`
    const parcelasValidas = [1,3,6,9,12]
    const taxasJuros = {
        1: 0,
        3: 0.1,
        6: 0.15,
        12: 0.25
    }

    while(true){
        if (!parcelasValidas.includes(parcelas)){
            parcelas = parseInt(prompt(`Número de parcelas inválido. Digite um número de parcelas válido `),10)
        } else {
            break
        }
    }

    const juros = valor*taxasJuros[parcelas]
    const total = valor + juros
    const valorParcela = (total/parcelas).toFixed(2)

    console.log('Valor da dívida'.padEnd(20)+
'Valor dos juros'.padEnd(20)+
'Quantidade de Parcelas'.padEnd(25)+
'Valor da Parcela')

console.log (
    `${formatarReais(total).padEnd(20)} ${formatarReais(juros).padEnd(20)} ${String(parcelas).padEnd(25)} ${formatarReais(parseFloat(valorParcela))}`
)

}

calculaDivida(1000,3)