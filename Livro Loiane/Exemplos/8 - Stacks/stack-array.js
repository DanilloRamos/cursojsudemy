export class Stack {
    constructor(){
        this.items = [] //array que irá armazenar a pilha
    }

    push(element){
        return this.items.push(element) //método que adiciona elementos no topo da pilha
    }

    pop(){
        return this.items.pop() //remove elementos do topo da pilha
    }

    peek(){
        return this.items[this.items.length-1] //devolve o elemento que está no topo da pilha
    }

    isEmpty(){//verifica se a pilha está vazia
        
        return this.items.length === 0? 'Sim':'Não'
    }
 

    size(){
        return this.items.length //retorna o tamanho da pilha
    }

    clear(){
        return this.items = []
    }
}