import { Pilha } from "./pilha.js";
import { Fila } from "./fila.js";
import { Deque } from "./deque.js";


const deque = new Deque()


function obtemLetra(palavra){
    const letras = palavra.toLowerCase().split('')
    return letras
}

function ehPalindromo(palavra, opcao){

    let contrario = ''
    const letras = obtemLetra(palavra)
    let palindromo = false
    
    if (opcao === 1){
        
        const pilha = new Pilha()

        for (const letra of letras) {
            pilha.empilha(letra)
        }
       
        while (!pilha.vazia()) {
            contrario += pilha.desempilha()
        }

        if (letras.join('') === contrario) palindromo = true
    }

    if (opcao === 2){

        const fila = new Fila()

        for (let i = letras.length-1; i>=0; i--){
            fila.enfileira(letras[i])
        }

        while(!fila.vazia()){
            contrario += fila.desenfileira()
        }

        if (letras.join('') === contrario) palindromo = true

    }


    if (opcao === 3){

        const deque = new Deque()

        for (const letra of letras){
            deque.adicionaNoInicio(letra)
        }

        while(!deque.vazio()){
            contrario += deque.removeDoInicio()
        }

        if (letras.join('') === contrario) palindromo = true

        console.log(contrario)
    }

    return palindromo ? 'Palíndromo' : 'Não é palíndromo'
}

console.log(ehPalindromo('arara',1))