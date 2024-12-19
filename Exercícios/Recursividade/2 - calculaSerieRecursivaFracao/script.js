function somaSerieAteNFracao(n){
    if (n<=1){
        return 1
    }

    return (1/n) + somaSerieAteNFracao(n-1)
}

console.log(somaSerieAteNFracao(5))