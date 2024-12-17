function ordenaVetor(vetor){
    return vetor.sort()
}

function procuraValorIsolado(vetorOrdenado){
    let atual
    let proximo
    let odd

    for(let i=0;i<vetorOrdenado.length;i++){
        atual = vetorOrdenado[i]
        for (let j=0;j<i;j++){
            proximo = vetorOrdenado[j]
            if(atual!==proximo){
                odd = atual
            }
        }
    }

    return odd
}

let vetor = ['a','b','a','a','c','b','d','c','d','f']

let vetorOrdenado = (ordenaVetor(vetor))

console.log(procuraValorIsolado(vetorOrdenado))


