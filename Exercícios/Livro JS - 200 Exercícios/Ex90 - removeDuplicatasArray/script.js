function removeDuplicatas(arr){
    return [... new Set(arr)]
}

const nums = [1,2,3,2,4,3,5,6,7,5,8]
console.log(removeDuplicatas(nums))