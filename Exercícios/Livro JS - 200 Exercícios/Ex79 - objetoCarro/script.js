let carro = {
    marca:'Renault',
    modelo:'Duster',
    ano:2018,
    velocidadeAtual:100,

    acelerar:function(){
        this.velocidadeAtual+=50
    },

    frear:function(){
        this.velocidadeAtual-=50

        if (this.velocidadeAtual<0){
            this.velocidadeAtual = 0
        }
    },

    obterVelocidadeAtual:function(){
        return this.velocidadeAtual
    }
}


console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.frear()
console.log(carro.velocidadeAtual)
carro.frear()
carro.frear()
console.log(carro.velocidadeAtual)
carro.frear()
console.log(carro.velocidadeAtual)