let circulo = {
    raio:2.5,

    areaCirculo:function(){
        return Math.PI*Math.pow(this.raio,2)
    },

    circunferencia:function(){
        return 2*Math.PI*this.raio
    }
}

console.log(circulo.raio)
console.log(circulo.areaCirculo())
console.log(circulo.circunferencia())