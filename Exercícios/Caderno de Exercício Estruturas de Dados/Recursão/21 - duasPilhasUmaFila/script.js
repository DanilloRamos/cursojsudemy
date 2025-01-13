import { Pilha } from "./pilha.js";

const pilha0 = new Pilha()
const pilha1 = new Pilha()

function enfileira (elemento, numeroPilha){
    if (numeroPilha === 0){
        pilha0.empilha(elemento)
        console.log(`Pilha 0: ${pilha0.imprimePilha()}`)
    }

    if (numeroPilha === 1){
        pilha1.empilha(elemento)
        console.log(`Pilha 1: ${pilha1.imprimePilha()}`)
    }
}

function desenfileira(numeroPilha){
    const origem = numeroPilha === 0 ? pilha0:pilha1
    const destino = numeroPilha === 1 ? pilha1:pilha0

    if (origem.vazia()){
        console.log('A pilha de origem está vazia')
        return
    }

    while(origem.tamanho()>1){
        destino.empilha(origem.desempilha())
    }

    const removido = origem.desempilha()
    console.log(`Elemento removido: ${removido}`)

    while(!destino.vazia()){
        origem.empilha(destino.desempilha())
    }

    console.log(`Pilha${numeroPilha}: ${origem.imprimePilha()}`)
}

enfileira(5, 0)
enfileira(10, 1)
desenfileira(0)
desenfileira(1)