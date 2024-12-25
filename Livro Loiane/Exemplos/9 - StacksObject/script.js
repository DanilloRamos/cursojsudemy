//instanciando a classe stack
import { Stack } from "./stack-object.js";

const stack = new Stack();

stack.push(5)
stack.push(8)

console.log(`Pilha: ${stack.toString()}`)
console.log(`Tamanho atual: ${stack.size()}`)


console.log(`Elemento removido: ${stack.pop()}`)
console.log(`Pilha: ${stack.toString()}`)
console.log(`Tamanho atual: ${stack.size()}`)

stack.clear()
console.log(`Pilha: ${stack.toString()}`)
console.log(`Tamanho atual: ${stack.size()}`)

console.log(`Top da pilha: ${stack.peek()}`)