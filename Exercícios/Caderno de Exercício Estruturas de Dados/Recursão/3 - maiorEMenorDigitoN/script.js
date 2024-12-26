function maiorDigito(n){
    n = Math.abs(n)
    if (n < 10)
        return n
    return Math.max(n%10, maiorDigito(n/10))
}

function menorDigito(n){
    n = Math.abs(n)
    if (n < 10){
        return n
    }

    return Math.min(n % 10, menorDigito(n/10))
}

console.log(`Maior dígito: ${Math.trunc(maiorDigito(1234))}`)
console.log(`Menor dígito: ${Math.trunc(menorDigito(1234))}`)