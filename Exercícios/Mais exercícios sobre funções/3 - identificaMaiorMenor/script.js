function identificaMaior(a,b,c){  
    let maior = 0

    if (a>b && a>c){
        maior = a
    } else if (b>c){
        maior = b
    } else {
        maior = c
    }

    return maior
}

function identificaMenor(a,b,c){  
    let menor = 0

    if (a<b && a<c){
        menor = a
    } else if (b<c){
        menor = b
    } else {
        menor = c
    }

    return menor
}

let a = parseFloat(prompt('Digite um número: '))
let b = parseFloat(prompt('Digite outro número: '))
let c = parseFloat(prompt('Digite outro número: '))

console.log(`Maior número: ${identificaMaior(a,b,c)}`)
console.log(`Menor número: ${identificaMenor(a,b,c)}`)