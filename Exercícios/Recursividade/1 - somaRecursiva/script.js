function somarAteN(n){
    if (n<=0){
        return 0
    }

    return n + somarAteN(n-1)
}

console.log(somarAteN(10))