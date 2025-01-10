import { Deque } from "./deque.js";

const deque = new Deque()

console.log(deque.isEmpty())

deque.addBack('John')
deque.addBack('Jack')
console.log(deque.toString())

deque.addBack('Camila')
console.log(deque.toString())
console.log(deque.size())
console.log(deque.isEmpty())

deque.removeFront()
console.log(deque.toString())

deque.removeBack()
console.log(deque.toString())

deque.addBack('John')
console.log(deque.toString())