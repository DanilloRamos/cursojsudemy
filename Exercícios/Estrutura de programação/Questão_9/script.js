let divisor = false
let contDivisor = 0
let numero = prompt('Digite um número: ')

for (let i=1; i<=numero; i++){
    if (numero%i==0){
        divisor = true;
        contDivisor++;
    }
}

if (contDivisor==2){
    console.log(`${numero} é primo`)
} else {
    console.log(`${numero} não é primo`)
}