function newAvg(arr, newavg) {
    
    let currentMedia = Math.round(sumArray(arr)/8)

    if (currentMedia < newAvg)
    
    function sumArray(arr) {
        let sum = 0

        for (let i=0; i<arr.length; i++) sum += arr[i]

        return sum
    }

    return currentMedia
}