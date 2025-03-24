function selectSubarray(arr) { //Remove a Specific Element of an Array (Codewars)
    if (arr.length <= 4) return false

    function sumArray(arr){
        return arr.reduce((sum, value) => sum + value, 0)
    }

    function multArray(arr){
        return arr.reduce((mult, value) => mult * value, 1)
    }

    for (let i=0; i<arr.length; i++){
        let sub = []
        for (let j=0; j<arr.length; j++){
            if (j !== i) sub.push(arr[j])
        }
    }

    return q
}