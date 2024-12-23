//instanciando a classe stack
import { Stack } from "./stack-array.js";

const stack = new Stack();
console.log(`A pilha está vazia? ${stack.isEmpty()}`)
console.log(`Tamanho atual da pilha: ${stack.size()}`)

//adicionando elementos na pilha
stack.push(5)
stack.push(8)

//exibindo o elemento do topo da pilha
console.log(`Elemento do topo: ${stack.peek()}`)

//adicionando mais elementos e verificando tamanho e se a pilha está vazia
stack.push(11)
console.log(`A pilha está vazia? ${stack.isEmpty()}`)
console.log(`Tamanho atual da pilha: ${stack.size()}`)

stack.push(15)
console.log(`Tamanho atual da pilha: ${stack.size()}`)

//removendo itens
stack.pop()
stack.pop()
console.log(`Tamanho atual da pilha: ${stack.size()}`)