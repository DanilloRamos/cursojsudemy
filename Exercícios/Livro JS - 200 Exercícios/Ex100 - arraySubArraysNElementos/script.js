function geraSubArrays(array, n){
    const subArray = []

    for (let i=0;i<array.length; i+=n){
        subArray.push(array.slice(i, i+n))
    }

    return subArray;
}

const array = [1,2,3,4,5,6,7]
console.log(geraSubArrays(array, 3))