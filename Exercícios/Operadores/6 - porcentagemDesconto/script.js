function retornaPorcentagemDesconto(valorTotal,valorComDesconto){
    let diferenca = valorTotal - valorComDesconto

    return (diferenca/valorComDesconto)*100
}

let valorTotal = parseFloat(prompt('Informe o valor total do produto: '))
let valorComDesconto = parseFloat(prompt('Informe o valor com desconto: '))

while (isNaN(valorTotal) || isNaN(valorComDesconto)) {
    if (isNaN(valorTotal) || valorTotal<=0){
        valorTotal = parseFloat(prompt('Valor total inválido. Por favor, informe um valor total válido do produto: '))
    } else if (isNaN(valorComDesconto) || valorComDesconto<=0){
        valorComDesconto = parseFloat(prompt('Valor com desconto inválido. Por favor, informe um valor com desconto válido: '))
    }
}

console.log(`O desconto aplicado foi de ${retornaPorcentagemDesconto(valorTotal,valorComDesconto).toFixed(2)}%`)