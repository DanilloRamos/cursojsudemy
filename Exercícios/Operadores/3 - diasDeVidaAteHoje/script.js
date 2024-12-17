function diasDeVida(idade){
    return idade*365
}

let idade = parseInt(prompt('Digite sua idade: '))

while (isNaN(idade) || idade<=0){
    idade = parseInt(prompt('Idade inválida. Digite uma idade válida: '))    
}

console.log(`Você viveu até agora ${diasDeVida(idade)} dias`)