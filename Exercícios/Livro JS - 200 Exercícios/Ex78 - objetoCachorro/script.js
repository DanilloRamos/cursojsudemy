let cachorro = {
    raca:'SRD',
    nome:'Cebolinha',
    idade:'4',

    idadeHumana:function() {
        return this.idade*7
    }
}

console.log(cachorro)
console.log(cachorro.idadeHumana())