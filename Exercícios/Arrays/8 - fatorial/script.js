function fatorial(num){

    let fat = [1]

    for (let i=1;i<=num;i++){
       let atualFat = i*fat[i-1]
       fat.push(atualFat)
    }

    return fat
}

function main(){

    let num = parseInt(prompt(`Digite um número inteiro de termos para a sequência de fatoriais: `))

    while(!Number.isInteger(num) || isNaN(num)){
        num = parseInt(prompt(`Número ou caractere inválido. Por favor, digite um número inteiro de termos para a sequência de fatoriais: `))        
    }

    console.log(`Sequência de ${num} fatoriais: ${fatorial(num)}`)
}

main()