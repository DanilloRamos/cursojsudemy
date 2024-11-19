function somaMatrizes(){
    let mat1 = [[1,2], [3,4]]
    let mat2 = [[5,6],[7,8]]

    let matSoma = []
    let i=0

    do {
        let j=0
        matSoma[i]=[]
        do{
            matSoma[i][j] = mat1[i][j]+mat2[i][j]
            j++
        } while(j<mat1[i].length)
        i++
    }while(i<mat1.length)

    console.log(`A soma é ${JSON.stringify(matSoma)}`)
}

somaMatrizes()