
import class  ValuePair {
    constructor(chave, valor) {
        this.chave = chave
        this.valor = valor
        this.toString = function(){
            return `[${this.valor} - ${this.valor}]`
        }        
    }
}