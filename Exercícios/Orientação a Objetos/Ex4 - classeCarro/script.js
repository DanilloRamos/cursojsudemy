class Carro {
    constructor(marca,cor,gasolinaRestante, consumo){
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }

    dirigir(distancia){
        let litrosConsumidos = distancia/this.consumo

        this.gasolinaRestante -= litrosConsumidos

        if (this.gasolinaRestante<=0){
            console.log(`É necessário abastecer para continuar a viagem`)
        }

        return this.gasolinaRestante
    }

    abastecer(litros){
        return this.gasolinaRestante+=litros
    }
}


let carro = new Carro("VW", "Cinza", 100, 14)

console.log (carro)

carro.dirigir(100)
console.log(carro.gasolinaRestante.toFixed(2))

carro.digir(800)
console.log(carro.gasolinaRestante.toFixed(2))

carro.digir(300)
console.log(carro.gasolinaRestante.toFixed(2))

carro.abastecer(50)
console.log(carro.gasolinaRestante.toFixed(2))