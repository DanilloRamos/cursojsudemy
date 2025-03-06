export class Fila {
    constructor(){
        this.cont = 0
        this.itens = {}
    }

    enfileirar(elemento){
        this.itens[this.cont] = elemento
        this.cont++
    }

    desenfileirar(){
        if (this.estaVazia()) return undefined

        const saiuDaFila = this.itens[0]

        for (let i=0; i<this.cont-1; i++){
            this.itens[i] = this.itens[i+1]
        }

        delete this.itens[this.cont-1]
        this.cont--
        
        return saiuDaFila
    }

    estaVazia(){
        return this.cont === 0
    }

    tamanho(){
        return this.cont
    }

    zeraFila(){
        this.cont = 0
        this.itens = {}
    }

    imprimeFila(){
        if (this.estaVazia()) return ''

        let objString = `${this.itens[0]}`

        for (let i=1; i<this.tamanho(); i++){
            objString = `${objString}, ${this.itens[i]}`
        }

        return objString
    }
}