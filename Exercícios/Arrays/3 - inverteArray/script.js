function inverteArray(arr){
    let [a,b,c] = arr

    for (let i=0;i<arr.length;i++){
        return [c,b,a]
    }
}

function main(){
    let arr = []

    let num

    for (let i=0;i<3;i++){
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