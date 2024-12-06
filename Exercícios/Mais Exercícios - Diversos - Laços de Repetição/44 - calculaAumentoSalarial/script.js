function calculaAumentoSalarial(){
    
    const anoInicial = 1995
    const ano = anoInicial
    const anoAtual = new Date().getFullYear()
    
    let salarioInicial = 1000
    let atualizaSalario = 0

    console.log(`Salário Inicial ${anoInicial}: R$ ${salarioInicial.toFixed(2)}`)
    ano++
    atualizaSalario *= 1.015
    console.log(`Salário em ${ano}: R$`)
    
    

}