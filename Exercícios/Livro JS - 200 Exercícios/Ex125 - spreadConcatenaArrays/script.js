function combinaArrays(arr1,arr2){
    return [...arr1,...arr2]
}

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]

console.log(combinaArrays(arr1,arr2))