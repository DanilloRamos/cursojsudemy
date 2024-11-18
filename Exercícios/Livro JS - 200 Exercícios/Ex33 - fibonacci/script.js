function fibonacci(){
    let anterior = 0
    let proximo = 1
    let atual

    console.log(anterior)
    console.log(proximo)
    for (let i=2;i<10;i++){
        atual = anterior+proximo
        console.log(atual)
        anterior = proximo
        proximo = atual
    }
}

fibonacci()