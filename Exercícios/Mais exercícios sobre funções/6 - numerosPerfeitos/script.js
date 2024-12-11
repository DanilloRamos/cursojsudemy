function numeroPerfeito(num){
    
    let perfeito = false
    let fatores = []

    for (let i=1;i<num;i++){
        if (num%i===0){
            fatores.push(i)
        }
    }

    if (fatores.reduce((a,b) => a+b,0)===num){
        perfeito = true
    }

    return perfeito
}

function perfeitosAteN(num){
    
    let numerosPerfeitos = []

    for (let i=1; i<num; i++){
        if (numeroPerfeito(i)){
            numerosPerfeitos.push(i)
        }
    }

    console.log(`Números perfeitos de 1 a ${num}: ${numerosPerfeitos.join(', ')}`)
}

let num = parseInt(prompt('Digite um número inteiro maior que zero para verificar: '))

while(num<=0 || isNaN(num)){
    num = parseInt(prompt('Número inválido. Por favor, digite um número inteiro maior que zero para verificar: '))
}

if (numeroPerfeito(num)){
    console.log(`${num} é um número perfeito`)
} else {
    console.log(`${num} não é um número perfeito`)    
}

perfeitosAteN(num)