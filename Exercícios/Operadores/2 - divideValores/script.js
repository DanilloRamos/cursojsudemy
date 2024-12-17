function acrescentaPercentual(num){
    return num*1.15
}

let num = parseFloat(prompt('Informe um valor numérico qualquer: '))

while(isNaN(num)){
    num = parseFloat(prompt('Valor inválido. Por favor, informe um valor numérico válido: '))
}

console.log(`Valor informado acrescido de 15%: ${acrescentaPercentual(num).toFixed(2)}`)