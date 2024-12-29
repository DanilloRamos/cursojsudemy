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

let array = [1,2,3,4,5,5]
console.log(calculaMedia(array))
console.log(calculaMediana(array))
console.log(calculaModa(array))
