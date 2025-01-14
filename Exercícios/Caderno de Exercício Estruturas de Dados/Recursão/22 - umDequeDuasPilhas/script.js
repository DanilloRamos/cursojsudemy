import { Pilha } from "./pilha.js";

const pilha0 = new Pilha()
const pilha1 = new Pilha()

function adicionaNoInicio (elemento, numeroPilha){
    
    const origem = numeroPilha === 0 ? pilha0 : pilha1
    const destino = numeroPilha === 1 ? pilha1 : pilha0

    while(!origem.vazia()){
        destino.empilha(origem.desempilha())
    }

    origem.empilha(elemento)

    while(!destino.vazia()){
        origem.empilha(destino.desempilha())
    }
    
    console.log(`Pilha${numeroPilha}: ${origem.imprimePilha()}`)
}

function adicionaNoFinal(numeroPilha){
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

adicionaNoInicio(5,0)
adicionaNoInicio(12,0)