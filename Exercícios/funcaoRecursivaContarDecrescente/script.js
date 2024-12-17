function preencheVetorRecursivamente(n, vet =[]){


    if (n<1){
        return vet
    }

    vet.push(n)
    return preencheVetorRecursivamente(n-1, vet)
}

let resultado = preencheVetorRecursivamente(5)
console.log(resultado.join(', '))