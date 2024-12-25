export class Stack {
    constructor(){
        this.count = 0
        this.items = []
    }

    push(element){
      this.items[this.count] = element
      this.count++
    }

    pop(){
        if (this.isEmpty()){
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peek(){//devolve o elemento que está no topo da pilha
        if (this.isEmpty()){
            return `Sem elementos`
        } 
        return this.items[this.count-1]
    }

    isEmpty(){//verifica se a pilha está vazia
        
        return this.count === 0
    }
 

    size(){
        return this.count //retorna o tamanho da pilha
    }

    clear(){
        this.count = 0 //ajuda a manter o controle do tamanho da pilha
        this.items = {}
    }

    toString(){
        if (this.isEmpty()){
            return ''
        }

        let objString = `${this.items[0]}`

        for (let i=1; i<this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}