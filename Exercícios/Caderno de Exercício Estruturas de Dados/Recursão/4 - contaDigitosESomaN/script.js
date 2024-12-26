function contaDigitos(n){
    if (n < 10) return 1
    return 1 + contaDigitos(n/10)
}

function somaDigitos(n){
    if (n === 0) return 0
    return (n%10) + Math.trunc(somaDigitos(n/10))
}

console.log(contaDigitos(12345))
console.log(somaDigitos(12345))