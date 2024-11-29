function formaParesElementos (array){
    const pares = []

    for (let i=0;i<array.length;i++){
        for (let j=i;j<array.length;j++){
           if (array[i]!==array[j]){
            pares.push([array[i], array[j]])
           }
        }
    }

    return pares
}

const nums = [1,2,3,4]

console.log(formaParesElementos(nums))