class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Cachorro extends Mamifero {
    constructor(patas,raca){
        super (patas,patas)
        this.raca = raca
    }

    latir(){
        console.log("au au")
    }
}

let pug = new Cachorro(4,'Pug')

console.log(pug.patas)

pug.latir()

console.log(new Cachorro instanceof Mamifero)
