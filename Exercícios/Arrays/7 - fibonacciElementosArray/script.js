function fibonacci(num){
    let fib = [0,1]

    for (let i=2;i<num;i++){
        let proximo = fib [i-1]+fib[i-2]
        fib.push(proximo)
    }

    return fib
}

function main(){

    let num = parseInt(prompt(`Digite um número inteiro de termos para a sequência: `))

    while(!Number.isInteger(num) || isNaN(num)){
        num = parseInt(prompt(`Número ou caractere inválido. Por favor, digite um número inteiro de termos para a sequência: `))        
    }

    console.log(`Sequência de ${num} termos: ${fibonacci(num)}`)
}

main()