function ordenaArray(arr){
    let n = arr.length
    let trocou

    do {
        trocou = false

        for (let i=0;i<n-1;i++){
            if (arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp

                trocou = true
            }
        }

        n--
    } while (trocou)

    return arr
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
    console.log(`Array invertido: [${ordenaArray(arr).join(', ')}]`)
}

main()