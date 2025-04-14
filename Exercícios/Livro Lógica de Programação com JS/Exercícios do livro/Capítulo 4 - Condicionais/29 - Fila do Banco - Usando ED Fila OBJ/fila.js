export default class Fila {
    constructor(){
        this.itens = []
    }

    enfileirar(item){
        this.itens.push(item)
    }

    desenfileirar(){ 
        if (this.estaVazia()) return undefined

        const eliminado = this.itens[0]
        
        this.itens.shift()

        return eliminado
    }

    estaVazia(){
        return this.itens.length === 0 ? true:false
    }


    tamanho(){
        return this.itens.length
    }

    toString() {
        if (this.estaVazia()) return ``

        let objString = this.itens[0]

        for (let i=1; i<this.itens.length; i++) objString = `${objString}, ${this.itens[i]}`

        return objString
    }
}