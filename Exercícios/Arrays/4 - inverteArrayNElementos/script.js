function inverteArray(arr){
    let invertido = []

    for (let i=arr.length-1;i>=0;i--){
        invertido.push(arr[i])
    }

    return invertido
}

function main(){
    let arr = []

    let num
    let tam = parseInt(prompt('Informe o tamanho do array: '))

    while(isNaN(tam)){
        tam = parseInt(prompt(`Caractere inválido. Por favor, digite um número:`))
    }

    for (let i=0;i<tam;i++){
        num = parseInt(prompt(`Digite o ${i+1}º elemento do array:`))

        while (isNaN(num)){
            num = parseInt(prompt(`Caractere inválido. Por favor, digite um número:`))
        }

        arr.push(num)
    }

    console.log(`Array digitado: [${arr.join(', ')}]`)
    console.log(`Array invertido: [${inverteArray(arr).join(', ')}]`)
}

main()