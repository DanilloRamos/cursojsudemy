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

    imprimeFila(){
        if (this.estaVazia()) return ''

        let objString = JSON.stringify(this.itens[0])

        for (let i=1; i<this.cont; i++) objString = `${objString}, ${JSON.stringify(this.itens[i])}`

        return objString
    }
}