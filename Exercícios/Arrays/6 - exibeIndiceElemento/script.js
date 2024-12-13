function identificaIndiceChave(arr,chave){
    let indices = []

    for (let i=0;i<arr.length;i++){
        if (arr[i]===chave){
            indices.push(i)
        }
    }

    return indices
}

function main(){
    let arr = []

    let num
    let tam = parseInt(prompt('Informe o tamanho do array: '))
    let chave = parseInt(prompt('Informe uma chave para ser procurada no array: '))

    while(isNaN(tam)){
        tam = parseInt(prompt(`Caractere inválido. Por favor, digite um número:`))
    }

    while(isNaN(chave)){
        chave = parseInt(prompt(`Chave inválida. Por favor, digite um número:`))
    }

    for (let i=0;i<tam;i++){
        num = parseInt(prompt(`Digite o ${i+1}º elemento do array:`))

        while (isNaN(num)){
            num = parseInt(prompt(`Caractere inválido. Por favor, digite um número:`))
        }

        arr.push(num)
    }

    console.log(`Array digitado: [${arr.join(', ')}]`)
    console.log(`Índices onde consta a chave procurada: ${identificaIndiceChave(arr,chave)}`)
}

main()