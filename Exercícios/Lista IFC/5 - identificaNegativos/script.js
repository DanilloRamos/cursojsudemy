function identificaNegativos (...numeros) {
    
    let contNegativos = 0

    for (let i=0;i<numeros.length;i++){
        if (numeros[i]<0){
            contNegativos++
        }
    }

    return contNegativos
}

function main(){

    let numeros = []

    while (true){
        let num = parseInt(prompt('Digite um número qualquer ou 0 para encerrar a aplicação: '))

        while (isNaN(num)){
            num = parseInt(prompt('Caractere inválido. Por favor, digite um número qualquer ou 0 para encerrar a aplicação: '))
        }

        numeros.push(num)

        if (num===0){
            console.log(`Números negativos digitados: ${identificaNegativos(...numeros)}`)
            break
        }
    }
}

main()