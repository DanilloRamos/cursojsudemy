export class Pilha {
    constructor(){
        this.itens = [null]
    }

    empilha(valor){
        this.itens.push(valor)
        this.itens[0] = this.itens.length-1
    }

    desempilha(){
        return this.itens.pop()     
    }

    topo(){
        return this.itens[this.itens.length-1]
    }

    vazia(){
        return this.itens.length === 0
    }

    tamanho(){
        return this.itens.length
    }

    esvazia(){
        return this.itens = []
    }

    imprimePilha(){
        if (this.vazia()) return ''

        return this.itens.join(', ')
    }
}