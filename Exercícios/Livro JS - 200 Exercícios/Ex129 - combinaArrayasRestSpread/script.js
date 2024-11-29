function combinaArraysUsandoRestSpread(...arrays){
    return [].concat(...arrays)
}

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9]

console.log(combinaArraysUsandoRestSpread(arr1,arr2))