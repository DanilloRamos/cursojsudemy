function dadosSobreAcidentes(){
    
    let somaVeiculosGeral = 0
    let somaVeiculosMenosDoisMil = 0
    let contCidadesMenosDoisMil = 0

    let maiorIndice = -Infinity
    let menorIndice = Infinity

    let codMaiorIndice
    let codMenorIndice

    for (let i=1; i<=5; i++){
        let dadosCidades = {
            codigo: parseInt(prompt(`Informe o código da cidade ${i}: `)),
            numeroVeiculosPasseio: parseInt(prompt(`Informe o número de veículos de passeio na cidade ${i} em 1999: `)),
            numeroAcidentesComVitima: parseInt(prompt(`Informe o número de acidentes com vítima na cidade ${i} em 1999: `))
        }

        if (dadosCidades.numeroAcidentesComVitima>maiorIndice){
            maiorIndice = dadosCidades.numeroAcidentesComVitima
            codMaiorIndice = dadosCidades.codigo
        }

        if (dadosCidades.numeroAcidentesComVitima<menorIndice){
            menorIndice = dadosCidades.numeroAcidentesComVitima
            codMenorIndice = dadosCidades.codigo
        }

        somaVeiculosGeral += dadosCidades.numeroVeiculosPasseio

        if (dadosCidades.numeroVeiculosPasseio<2000){
            somaVeiculosMenosDoisMil += dadosCidades.numeroVeiculosPasseio
            contCidadesMenosDoisMil++
        }
    }

    console.log(`Menor índice de acidentes de trânsito na cidade de código ${codMaiorIndice}, com ${menorIndice} acidentes`)
    console.log(`Maior índice de acidentes de trânsito na cidade de código ${codMenorIndice}, com ${maiorIndice} acidentes`)
    console.log(`Média de veículos em todas as cidades: ${(somaVeiculosGeral/5).toFixed(2)}`)
    console.log(`Média de acidentes em cidades com menos de 2000 veículos de passeio: ${(somaVeiculosMenosDoisMil/contCidadesMenosDoisMil).toFixed(2)}`)    
}

dadosSobreAcidentes()