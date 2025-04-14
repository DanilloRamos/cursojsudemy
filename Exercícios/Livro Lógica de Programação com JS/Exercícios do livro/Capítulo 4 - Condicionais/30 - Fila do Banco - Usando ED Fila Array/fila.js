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
        if (this.estaVazia()) return ''

        let lista = ``

        for (let item of this.itens) lista += `${item.nome} - ${item.idade} anos \n`

        return lista
    }
}