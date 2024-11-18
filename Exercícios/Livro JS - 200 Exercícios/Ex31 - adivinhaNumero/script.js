function adivinhaNumero(){
    let min = 1
    let max = 100
    let chute = Math.floor((max+min)/2)
    let numeroPensado = Math.floor(Math.random()*(max-min+1))

    while(chute!=numeroPensado){
        if (chute>numeroPensado){
            max = chute
        } else {
            min = chute
        }

        chute = Math.floor((max+min)/2)
    }

    console.log(`${chute} é o número pensado`)
}

adivinhaNumero()