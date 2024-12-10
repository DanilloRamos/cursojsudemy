function inverteInteiro(num){

    let temp = num
    let invertido = 0

    while (temp>0){
        let digito = temp%10
        invertido = (invertido*10)+digito
        temp = Math.floor(temp/10)
    }

    return invertido
}

let num = parseInt(prompt('Digite um número inteiro positivo maior que 0: '))

while(num<=0){
    num = parseInt(prompt(`O número informado é inválido. Por favor, digite um número inteiro positivo maior que 0: `))
}

console.log(inverteInteiro(num))