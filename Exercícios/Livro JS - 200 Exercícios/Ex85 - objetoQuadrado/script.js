let retangulo ={
    altura:10,
    largura:15,

    area:function(){
        return this.altura*this.largura
    }
}

let quadrado = Object.create(retangulo)
quadrado.altura = 10
quadrado.largura = quadrado.altura

quadrado.calcularArea = function(){
    return this.altura * this.largura
}

console.log(quadrado.calcularArea())