function findOutlier(integers){
    if (integers.length < 3) return false

    let evenArray = []
    let oddArray = []

    for (let i=0; i<integers.length; i++){
        if (integers[i] % 2 === 0){
            evenArray.push(integers[i])
        } else if (integers[i] % 2 !== 0){
            oddArray.push(integers[i])
        }
    }

    if (evenArray.length === 1) return Number(evenArray)
    if (oddArray.length === 1) return Number(oddArray)
}