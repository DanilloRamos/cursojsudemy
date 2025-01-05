import { Pilha } from "./pilha.js";

const pilha = new Pilha()

pilha.empilha(2)
pilha.empilha(5)
console.log(pilha.imprimePilha())

pilha.empilha(7)
console.log(pilha.imprimePilha())
pilha.esvazia()
console.log(pilha.vazia())