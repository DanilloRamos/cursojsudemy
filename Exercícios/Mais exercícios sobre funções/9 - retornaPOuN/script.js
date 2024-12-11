function verificaArgumento(num){
    if (num>0){
        return 'P'
    } else {
        return 'N'
    }
}

let num = parseInt(prompt('Digite um número inteiro: '))

while(isNaN(num)){
    num = parseInt(prompt('Caractere inválido. Por favor, digite um número inteiro: '))
}

console.log(verificaArgumento(num))