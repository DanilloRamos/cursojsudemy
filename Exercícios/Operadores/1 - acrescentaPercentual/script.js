function divideValores(a,b){
    return a/b
}

let a = parseFloat(prompt('Informe um valor numérico qualquer: '))
let b = parseFloat(prompt('Informe outro valor numérico qualquer: '))

while(isNaN(a) || isNaN(b)){
    if (isNaN(a)) {
        a = parseFloat(prompt('Valor inválido. Por favor, informe um valor numérico válido: '))
        break
    } else if (isNaN(b)){
        b = parseFloat(prompt('Valor inválido. Por favor, informe um valor numérico válido: '))
        break        
    }

}

console.log(`${a}/${b} = ${divideValores(a,b).toFixed(2)}`)