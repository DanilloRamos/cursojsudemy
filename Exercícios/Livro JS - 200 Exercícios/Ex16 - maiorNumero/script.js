function determinaMaiorNumero(n1,n2,n3){
    if (n1>n2 && n1>n3){
        console.log(`${n1} é o maior número`)
    } else if (n2>n1 && n2>n3){
        console.log(`${n2} é o maior número`)
    } else {
        console.log(`${n3} é o maior número`)
    }
}

determinaMaiorNumero(5,4,3)
determinaMaiorNumero(1,5,3)
determinaMaiorNumero(1,2,3)