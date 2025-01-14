import { Pilha } from "./pilha.js";

const pilha0 = new Pilha()
const pilha1 = new Pilha()

function adicionaNoInicio(elemento, numeroPilha) {
    const origem = numeroPilha === 0 ? pilha0 : pilha1;
    const destino = numeroPilha === 1 ? pilha0 : pilha1;

    while (!origem.vazia()) {
        destino.empilha(origem.desempilha());
    }

    origem.empilha(elemento);

    while (!destino.vazia()) {
        origem.empilha(destino.desempilha());
    }

    console.log(`Pilha${numeroPilha}: ${origem.imprimePilha()}`)
}

function adicionaNoFinal(elemento,numeroPilha){
   
    if (numeroPilha === 0) {
        pilha0.empilha(elemento)
        console.log(`Pilha${numeroPilha}: ${pilha0.imprimePilha()}`)
    } else if (numeroPilha === 1) {
        pilha1.empilha(elemento)
        console.log(`Pilha${numeroPilha}: ${pilha1.imprimePilha()}`)
    }
}

function removeDoInicio(numeroPilha){
    const origem = numeroPilha === 0 ? pilha0 : pilha1;
    const destino = numeroPilha === 1 ? pilha0 : pilha1;

    while(!origem.vazia()){
        destino.empilha(origem.desempilha())

        if(origem.tamanho() === 1){
            origem.desempilha()
            break
        }
    }

    while(!destino.vazia()){
        origem.empilha(destino.desempilha())
    }

    console.log(`Pilha${numeroPilha}: ${origem.imprimePilha()}`)
}

function removeDoFinal(numeroPilha){
    if (numeroPilha === 0) {
        pilha0.desempilha()
        console.log(`Pilha${numeroPilha}: ${pilha0.imprimePilha()}`)
    } else if (numeroPilha === 1) {
        pilha1.desempilha()
        console.log(`Pilha${numeroPilha}: ${pilha1.imprimePilha()}`)
    }
}

adicionaNoInicio(5,0)
adicionaNoInicio(12,0)
adicionaNoInicio(15,0)
adicionaNoFinal(20,0)
adicionaNoFinal(40,0)
adicionaNoInicio(55,0)
removeDoInicio(0)
removeDoFinal(0)