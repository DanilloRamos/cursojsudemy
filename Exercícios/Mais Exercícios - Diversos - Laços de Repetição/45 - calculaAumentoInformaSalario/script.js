function calculaAumentoSalarial(salarioInicial){
    
    const anoInicial = 1995
    let ano = anoInicial
    const anoAtual = new Date().getFullYear()
    let aumento = 0.015
    
   // let salarioInicial = 1000
    let atualizaSalario = 0

    console.log(`Salário Inicial ${anoInicial}: R$ ${salarioInicial.toFixed(2)}`)
    ano++
    atualizaSalario = salarioInicial*(1+aumento)
    console.log(`Salário em ${ano}: R$ ${atualizaSalario.toFixed(2)}`)

    while (ano<=anoAtual){
        ano++
        atualizaSalario *=(1+(aumento*2))
        console.log(`Salário em ${ano}: R$ ${atualizaSalario.toFixed(2)}`)
    }
}

calculaAumentoSalarial(1500)