function somaI(a, b){
    return a + b
}

function somaR(a, b){
    if (b === 0)  return a

    if (b > 0) return somaR(a+1, b-1)
    if (b < 0) return somaR(a-1, b+1)
}

function multI(a, b){
    return a*b
}

function multR(a, b){
    if (b === 0)
        return 0
    if (b > 0) return a + multR(a, b-1)
    if (b < 0) return -multR(a, -b)
}

console.log(somaR(5,3))
console.log(multR(5,3))