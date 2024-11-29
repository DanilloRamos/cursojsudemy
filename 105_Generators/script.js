function* criadorID(){
    let id = 0

    while(true){
        yield id++
    }
}

let criaId = criadorID()

console.log(criaId.next().value)
console.log(criaId.next().value)