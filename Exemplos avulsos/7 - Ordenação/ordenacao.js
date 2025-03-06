export class Ordenacao {
    
    constructor () {
        this.itens = {}
        this.cont = 0
    }

    insere (item){
        this.itens[this.cont] = item
        this.cont++
    }
}