function inverteRec(n, inverso){
    if (n === 0) return inverso

    return inverteRec(Math.floor(n / 10), inverso * 10 + (n % 10))
}

function inverte(n){
    return (inverteRec(n, 0))
}

function main(){
    while(true){
        let n = parseInt(prompt('Digite um número inteiro positivo ou 0 para encerrar:'))

        if (n === 0){
            console.log(`O inverso de ${n} é ${inverte(n)}`)
            console.log('Encerrando...')
            break
        }

        while(isNaN(n) || n < 0){
            n = parseInt(prompt('valor inválido. Digite um número inteiro positivo ou 0 para encerrar:'))

        }
    }
}

main()