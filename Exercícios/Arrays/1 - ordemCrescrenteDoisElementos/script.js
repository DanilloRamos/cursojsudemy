function ordenaNumeros(arr){
    let [a,b] = arr

    if(a>b){
        return[b,a]
    }

    return[a,b]
}

function verificaTamanhoArray(arr){
    if (arr.length !== 2){
        console.log('O array deve ter tamanho 2')
    }
}

function main(){
    
    let arr = []
    let num

    for (let i=0;i<2;i++){
        num = parseInt(prompt(`Digite o ${i+1}º elemento`))
        arr.push(num)
    }

    while(verificaTamanhoArray(arr)){
        for (let i=0;i<2;i++){
            num = parseInt(prompt(`Digite o ${i+1}º elemento`))
            arr.push(num)
        }        
    }

    console.log(`Array ordenado: ${ordenaNumeros(arr)}`)
}

main()