function fibonacci(num){
    let anterior = 0
    let atual = 1
    let proximo

    //console.log(anterior)
    //console.log(atual)

    for (let i=2;i<num;i++){
        proximo = anterior+atual
        //console.log(proximo)
        anterior = atual
        atual = proximo
    }

    console.log(`O ${num}º termo da série de Fibonacci é ${proximo}`)
}

fibonacci(10)