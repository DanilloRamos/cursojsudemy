function converteBinario(num){
    let binario = ''

    do {
        binario+=(num%2)
        num=Math.floor(num/2)
    } while (num>0)

    console.log(`${num} em binário é ${binario.split('').reverse().join('')}`)
}

converteBinario(54)