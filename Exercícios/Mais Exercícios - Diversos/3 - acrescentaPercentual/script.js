function acrescentaPercentual(valor,percentual){
    return valor * (1+(percentual/100))
}

console.log(acrescentaPercentual(100,10).toFixed(2))