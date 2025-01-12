import { Pilha } from "./pilha.js";
import { Fila } from "./fila.js";
import { Deque } from "./deque.js";

const pilha = new Pilha()
const fila = new Fila()
const deque = new Deque()


function obtemLetra(palavra){
    const letras = palavra.split('').join(', ')
    return letras
}

function ehPalindromo(palavra){
}

console.log(obtemLetra('avião'))