function eSubArray(arr1,arr2){
    return arr1.join(',').includes(arr2.join(',')) ? 'É sub array':'Não é sub array'
}

let arr1 = [1,2,3,4,5,6,7,8,9]
let arr2 = [4,5,6,7]

console.log(eSubArray(arr1, arr2))