function calculaMDCIterativo(x, y){
    while(y!==0){
        let resto = x%y
        x = y
        y = resto
    }

    return Math.abs(x)
}

function calculaMDCRecursivo(x, y){
    if (y === 0) return x

    return calculaMDCRecursivo(y, x%y)
}

console.log(calculaMDCIterativo(48,18))
console.log(calculaMDCRecursivo(48,18))