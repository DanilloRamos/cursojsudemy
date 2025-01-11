export class Queue {
    constructor(){
        this.count = 0 //chave do objeto items
        this.lowestCount = 0 //ajuda a manter o controle do primeiro elemento da fila
        this.items = {}
    }

    enqueue(element){
        this.items[this.count] = element //element é o valor do objeto items
        this.count++
    }

    dequeue(){
        if (this.isEmpty()){
            return undefined
        }

        const result = this.items[this.lowestCount] //armazena o valor da frente da fila
        delete this.items[this.lowestCount] //retira o valor da fila
        this.lowestCount++ //incrementa o contador de frente da fila
        return result //retorna o valor retirado
    }

    peek(){
        if (this.isEmpty) return undefined

        return this.items[this.lowestCount]
    }

    isEmpty(){
        return this.size() === 0
    }

    size(){
        this.count - this.lowestCount
    }

    clear(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    toString(){
        if(this.isEmpty()) return ''

        let objString = `${this.items[this.lowestCount]}`

        for (let i = this.lowestCount+1; i<this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }

        return objString
    }
}