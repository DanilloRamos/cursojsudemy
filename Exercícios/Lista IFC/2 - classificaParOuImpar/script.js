function classificaParOuImpar(arr){
    for (let i=0; i<arr.length; i++){
        if (arr[i]%2===0){
            console.log(`${arr[i]} é par`)
        } else {
            console.log(`${arr[i]} é ímpar`)
        }
    }
}

function main(){

    let arr = [2,-1,0,3,6,-10,12,-33,-2,11]

    classificaParOuImpar(arr)
}

main()