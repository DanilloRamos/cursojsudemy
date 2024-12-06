function precoMedioColecao(cds){

    let somaPreco = 0

    for (let i=0;i<cds;i++){
        let entrada = prompt(`Informe o valor do cd ${i+1}: `)
        let preco = parseFloat(entrada)

        somaPreco+=preco
    }

    console.log(`Tamanho da coleção: ${cds} CDs`)
    console.log(`Preço médio de cada CD: R$ ${(somaPreco/cds).toFixed(2)}`)
}

precoMedioColecao(3)