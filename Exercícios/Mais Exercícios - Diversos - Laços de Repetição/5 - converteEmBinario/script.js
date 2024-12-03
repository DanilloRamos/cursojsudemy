function converteEmBinario(num){
    let binario = ''

    do{
        binario += (num%2)
        num = Math.floor(num/2)
    }while(num>0)

    return binario.split('').reverse().join('')
}


console.log(converteEmBinario(52))