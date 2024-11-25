function encontraMediana(array){
    array.sort((a,b)=>a-b)
    const mediana = Math.floor(array.length/2)

    if (array.length%2===0){
        return (array[mediana-1]/array[mediana])/2
    }

    return array[mediana]
}

const array = [5,2,9,1,5,6]
console.log(encontraMediana(array))