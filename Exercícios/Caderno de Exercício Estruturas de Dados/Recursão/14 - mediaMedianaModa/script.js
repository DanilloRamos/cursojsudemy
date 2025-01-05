function calculaMedia(array){
    let soma = 0

    for (let i=0; i<array.length; i++){
        soma += array[i]
    }

    return soma/array.length
}

function calculaMediana(array){
    let mediana = 0
    for (let i=0; i<array.length; i++){
        if (array.length%2 !== 0){
            mediana = array[Math.floor(array.length/2)]
        } else {
            mediana = (array[(array.length/2)-1]+array[array.length/2])/2
        }
    }

    return mediana
}

function calculaModa(array){
    const freq = {}
    let maxFreq = 0
    let moda  = []

    for (const num of array){
        freq[num] = (freq[num] || 0) + 1
        if (freq[num] > maxFreq){
            maxFreq = freq[num]
        }
    }

    for (const num in freq){
        if (freq[num]===maxFreq)
            moda.push(num)
    }

    return moda.length === 1? moda[0]:moda

}

let tam = parseInt(prompt('Informe o tamanho desejado para o array:'))
let array = []

while(isNaN(tam) || tam < 0){
    tam = parseInt(prompt('Tamanho inválido. Informe o tamanho desejado para o array:'))
}

for (let i=0; i<tam; i++){
    let num = parseInt(prompt(`Informe o ${i+1}º elemento do array`))

    while(isNaN(num)){
        num = parseInt(prompt(`Elemento inválido. Informe o ${i+1}º elemento do array`))
    }

    array.push(num)
}

console.log(`Média dos elementos: ${calculaMedia(array)}`)
console.log(`Mediana dos elementos: ${calculaMediana(array)}`)
console.log(`Moda dos elementos: ${calculaModa(array)}`)