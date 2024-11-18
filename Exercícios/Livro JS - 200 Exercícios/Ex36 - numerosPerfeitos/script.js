function numerosPerfeitos(){
    for (let i=0;i<=100;i++){
        let somaDiv = 0
        for (let j=1;j<i;j++){
            if (i%j==0){
                somaDiv += j
            }
        }

        if (somaDiv==i){
            console.log(i)
        }
    }
}

numerosPerfeitos()