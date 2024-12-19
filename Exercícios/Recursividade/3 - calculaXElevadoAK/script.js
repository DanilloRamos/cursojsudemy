function calculaPotencia(x,k){
    if (k===0){
        return 1
    }

    return x * calculaPotencia(x, k-1)
}

console.log(calculaPotencia(5,3))