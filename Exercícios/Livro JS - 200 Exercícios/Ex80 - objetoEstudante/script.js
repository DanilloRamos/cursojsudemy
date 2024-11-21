let estudante = {
    nome:'João',
    notas:[8,8.5,7,9,4],

    calculaMedia:function(){
        let soma = 0
        for (let i=0;i<this.notas.length;i++){
            soma += this.notas[i]
        }

        return soma/this.notas.length
    }
}