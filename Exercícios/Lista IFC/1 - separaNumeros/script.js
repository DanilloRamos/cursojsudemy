function separaPositivosNegativos(arr){
    
    let positivos = []
    let negativos = []

    for (let i=0;i<arr.length;i++){
        if (arr[i]>=0){
            positivos.push(arr[i])
        } else {
            negativos.push(arr[i])
        }
    }

    console.log('Positivos = '+positivos.join(', '))
    console.log('Negativos = '+negativos.join(', '))
}

function main(){

    let arr = [2,-1,0,3,6,-10,12,-33,-2,11]

    separaPositivosNegativos(arr)
}

main()