function moveZeros(arr) {
    let cont = 0

    for (let i=0; i<arr.length; i++){
        if (arr[i] !== 0){
            arr[cont] = arr[i]
            cont++
        }
    }

    while(cont < arr.length){
        arr[cont] = 0
        cont++
    }
    
    return arr
  }

  const arr = [false,1,0,1,2,0,1,3,'a']

  console.log(moveZeros(arr))