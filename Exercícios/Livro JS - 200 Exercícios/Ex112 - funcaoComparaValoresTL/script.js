function comparaValores(valor1, valor2){
    let compara = valor1 == valor2? "igual":(valor1>valor2?"maior":"menor")
    if (valor1 > valor2){
        return `O valor ${valor1} é maior que o valor ${valor2}`
    } else if (valor1 < valor2) {
        return `O valor ${valor1} é menor que o valor ${valor2}`
    } else {
        return `O valor ${valor1} é igual ao valor ${valor2}`
    }
}

console.log(comparaValores(5,2))
console.log(comparaValores(2,5))
console.log(comparaValores(2,2))