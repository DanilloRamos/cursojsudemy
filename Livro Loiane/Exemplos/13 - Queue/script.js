import { Queue } from "./queue.js";

const queue = new Queue()

queue.enqueue(5)
queue.enqueue(8)

console.log(queue.toString())

queue.dequeue()
console.log(queue.toString())