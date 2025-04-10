export default class Fila {
    constructor(){
        this.cont = 0
        this.itens = {}
    }

    enfileirar(item){
        this.itens[this.cont] = item
        this.cont++
    }

    desenfileirar(){ 
        if (this.estaVazia()) return undefined

        const saiu = this.itens[0]

        for (let i=0; i<this.cont; i++) this.itens[i] = this.itens[i+1]

        this.cont--

        return saiu
    }

    estaVazia(){
        return this.cont === 0 ? true:false
    }

    filtrarFila(callback){
        return Object.values(this.itens).filter(callback)
    }

    tamanho(){
        return this.cont
    }

    toString() {
        return Object.values(this.itens).map(p => `${p.nome} - ${p.idade} anos`).join('\n')
    }
}