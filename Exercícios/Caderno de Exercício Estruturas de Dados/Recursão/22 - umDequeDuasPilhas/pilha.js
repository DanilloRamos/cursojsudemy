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
        
        const removido = this.itens[this.cont-1]
        delete this.itens[this.cont-1]
        this.cont--

        return removido
    }

    topo(){
        return this.itens[this.cont-1]
    }

    vazia(){
        return this.cont === 0
    }

    tamanho(){
        return this.cont
    }

    esvazia(){  
        this.itens = {}
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