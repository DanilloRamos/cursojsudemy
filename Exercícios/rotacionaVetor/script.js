function rotacionaVetor(vetor,q){
    
    q = q%vetor.length //ajusta q para o tamanho do vetor

    if (q===0){
        return vetor
    }

    const parteFinal = vetor.slice(-q) //pega os últimos q elementos
    const parteInicial = vetor.slice(0, vetor.length-q) //pega o restante dos elementos

    //console.log(q)

    return parteFinal.concat(parteInicial)
}

let vetor = ['a','b','c','d','e']

console.log(rotacionaVetor(vetor,2))