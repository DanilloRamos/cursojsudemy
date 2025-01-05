import { Pilha } from "./pilha.js";

const pilha = new Pilha()

pilha.empilha(2,1)
pilha.empilha(5,2)
console.log(pilha.imprimePilha())

pilha.empilha(7,1)
pilha.empilha(8,2)
console.log(pilha.imprimePilha())
console.log(pilha.tamanho())