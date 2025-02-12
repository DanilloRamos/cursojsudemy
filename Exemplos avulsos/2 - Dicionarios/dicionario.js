export class Dictionary {

    constructor(){
        this.itens = {}
    }

    adicionar(chave,valor){
        this.itens[chave] = valor
    }

    remover(chave){
        if (this.existe(chave)){
            delete this.itens[chave]
            return true
        }

        return false
    }

    existe(chave){
        return this.itens.hasOwnProperty(chave)
    }

    get(chave){
        return this.existe(chave) ? this.itens[chave] : undefined
    }

    esvaziar(){
        this.itens = {}
    }

    tamanho(){
        return Object.keys(this.itens).length
    }

    valores(){
        let valores = []
        let chaves = Object.keys(this.itens)

        for (let i=0; i<chaves.length; i++){
            valores.push(this.itens[chaves[i]])
        }

        return valores
    }

    chaves(){
        return Object.keys(this.itens)
    }
}