export class Fila {
    constructor(){
        this.itens = {}
        this.cont = 0
    }

    enfilera(elemento){
        this.itens[this.cont] = elemento
        this.cont++
    }

    desenfilera(){
        if (this.vazia()) return undefined

        const retirado = this.itens[0]

        for (let i=0; i<this.cont; i++){
            this.itens[i] = this.itens[i+1]
        }

        delete this.itens[this.cont-1]
        this.cont--
        return retirado
    }

    fimDaFila(){
        return this.itens[this.cont-1]
    }

    inicioDaFila(){
        return this.itens[0]
    }

    vazia(){
        return this.itens.length === 0
    }

    tamanhoFila(){
        return this.cont
    }

    zeraFila(){
        this.itens = []
        this.cont = 0
    }

    imprimeFila(){
        if (this.vazia()) return ''

       let objString = `${this.itens[0]}`

       for (let i=1; i<this.cont; i++){
        objString = `${objString}, ${this.itens[i]}`
       }

       return objString
    }
}