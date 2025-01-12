export class Pilha {
    constructor(){
        this.itens = {}
        this.cont = 0
    }

    empilha(elemento){
        this.itens[this.cont] = elemento
        this.cont++
    }

    desempilha(){
        if (this.vazia()) return undefined

        const retirado = this.itens[this.cont]
        this.cont--
        delete this.itens[this.cont]
        return retirado
    }

    topo(){
        return this.itens[this.cont]
    }

    vazia(){
        return this.itens.length === 0
    }

    tamanho(){
        return this.cont
    }

    esvazia(){
        this.itens = []
        this.cont = 0
    }

    imprimePilha(){
        if (this.vazia()) return ''

       let objString = `${this.itens[0]}`

       for (let i=1; i<this.cont; i++){
        objString = `${objString}, ${this.itens[i]}`
       }

       return objString
    }
}