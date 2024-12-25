const items = new WeakMap()

export class Stack {
    constructor(){
        items.set(this,[])//this = chave do WeakMap e [] é o array que representa o valor
    }

    push(element){
      const s = items.get(this) //obtém o valor de items acessando o valor do WeakMap, onde this é a chave
      s.push(element)
    }

    pop(){
        const s = items.get(this)
        const r = s.pop
        return r
    }

    peek(){//devolve o elemento que está no topo da pilha
        const s = items.get(this)
        if (this.isEmpty()){
            return `Sem elementos`
        } 
        return s[s.length-1]
    }

    isEmpty(){//verifica se a pilha está vazia
        const s = items.get(this)
        return s.length === 0
    }
 

    size(){
        const s = items.get(this)//retorna o tamanho da pilha
        return s.length
    }

    clear(){
        items.set(this, [])
    }

    toString(){
        const stack = items.get(this);
        return stack.join(', ')
    }
}