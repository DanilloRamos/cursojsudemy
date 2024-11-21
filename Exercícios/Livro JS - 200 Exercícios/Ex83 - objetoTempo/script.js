let tempo = {
    horas:2,
    minutos:35,
    segundos:20,

    converteEmSegundos:function(){
        let segundos = (this.horas*60*60)+(this.minutos*60)+this.segundos
        return segundos
    }
}

console.log(tempo)
console.log(tempo.converteEmSegundos())