function selectSubarray(arr) { //Remove a Specific Element of an Array (Codewars)
    if (arr.length <= 4) return false

    function sumArray(arr){
        return arr.reduce((sum, value) => sum + value, 0)
    }

    function multArray(arr){
        return arr.reduce((mult, value) => mult * value, 1)
    }
    
    function minValue(arr){
        return Math.min(...arr)
    }
    
    let subArrays = []
    let sums = []
    let products = []
    let qModule = []
    let eliminateds = []

    for (let i=0; i<arr.length; i++){
        let sub = []
        for (let j=0; j<arr.length; j++){
            if (j !== i) sub.push(arr[j])
        }
        
        subArrays.push(sub)
        sums.push(sumArray(sub))
        products.push(multArray(sub))
        
        let eliminated = [i, arr[i]]
        eliminateds.push(eliminated)
        
        let qValue = products[i]/sums[i]
        if (qValue < 0) qValue *= -1
        qModule.push(qValue)
    }

        return qModule
}
