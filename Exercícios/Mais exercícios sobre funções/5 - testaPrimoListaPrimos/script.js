function ehPrimo(num){
    let isPrimo = true

    for (let i=2;i<num;i++){
        if (num%i===0){
            isPrimo = false
        }
    }

    if (isPrimo){
        console.log(`${num} é primo`)
    } else {
        console.log(`${num} não é primo`)
    }
}

function listaPrimos(num){
    
    let primos = []

    for (let i=2; i<=num; i++){
        let primo = true

        for (let j=2;j<=Math.sqrt(i);j++){
            if (i%j===0){
                primo = false
                break
            }
        }

        if (primo){
            primos.push(i)
        }
    }

    console.log(`Primos de 1 a ${num}: ${primos.join(', ')}`)
}

let num = parseInt(prompt('Digite um número inteiro positivo para testar: '))

while(num<=0){
    num = parseInt(prompt('Número inválido. Por favor, digite um número inteiro positivo para testar: '))    
}

ehPrimo(num)
listaPrimos(num)