//import Nodo from "./Node.js";
import { DuploNodo } from "./Node.js";

export class DoublyLinkedList {

    constructor(){
        this.cont = 0
        this.cabecaDaLista = undefined
        this.finalDaLista = undefined
    }

    inserirNoFinal (elemento){
        let node = new DuploNodo(elemento)
        let nodoAtual = this.cabecaDaLista

        if (this.listaVazia()){
            this.cabecaDaLista = node
            this.finalDaLista = node
        } else {
            while (nodoAtual.proximo){
                nodoAtual = nodoAtual.proximo
            }

            nodoAtual.proximo = node
            node.anterior = nodoAtual
            this.finalDaLista = node
        }

        this.cont++
    }

    inserirEm(elemento, indice){
        if (indice >=0 && indice <= this.contaNodes()){
            let nodo = new DuploNodo(elemento)
            let posicaoAtual = 0
            let nodoAtual = this.cabecaDaLista
            let ant = null

            if (indice === 0){
               if (this.cabecaDaLista) {
                nodo.proximo = this.cabecaDaLista
                this.cabecaDaLista.anterior = nodo
               }

               this.cabecaDaLista = nodo
            
               if (!this.finalDaLista){
                this.finalDaLista = nodo
               }
            } else if (indice = this.contaNodes()){
                if (this.finalDaLista){
                    this.finalDaLista.proximo = nodo
                    nodo.anterior = this.finalDaLista
                }
                this.finalDaLista = nodo
            } else {
                while(posicaoAtual < indice){

                    //if (!nodoAtual) return false
                    ant = nodoAtual
                    nodoAtual = nodoAtual.proximo
                    posicaoAtual++
                }

                nodo.proximo = nodoAtual
                nodo.anterior = ant
                ant.proximo = nodo
            }

            this.cont++
            return true
        }
        return false
    }

    inserirNoInicio(elemento){
        let nodo =  new DuploNodo(elemento)
        let nodoAtual = this.cabecaDaLista

        nodo.proximo = nodoAtual
        
        if (nodoAtual !== null)  nodoAtual.anterior = nodo

        this.cabecaDaLista = nodo

        this.cont++

        return true
    }

    obtemNode(indice){
        if (indice>=0 && indice<= this.contaNodes()){
            let nodoAtual = this.cabecaDaLista
            let posicaoAtual = 0

            while(posicaoAtual++ < indice){
                nodoAtual = nodoAtual.proximo
            }

            return `Elemento do nó procurado: ${nodoAtual.elemento}\n Elemento do próximo nó: ${nodoAtual.proximo.elemento}`
        }
    }

    encontraElemento(elemento){
        let posicaoAtual = this.cabecaDaLista

        while(posicaoAtual){
            if (posicaoAtual.elemento === elemento){
                return `Elemento encontrado no ${this.retornaIndice(elemento)+1}º nodo`
            }

            posicaoAtual = posicaoAtual.proximo
        }

        return `Elemento não encontrado`
    }

    retornaIndice(elemento){
        let nodeAtual = this.cabecaDaLista
        let posicao = 0

        while(nodeAtual){
            if (elemento === nodeAtual.elemento){
                return posicao
            }
            nodeAtual = nodeAtual.proximo
            posicao++
        }

        return false
    }

    removerEm(indice){
        if (indice >= 0 && indice < this.cont){
            let atual = this.cabecaDaLista
            let nodoPrevio
            let pos = 0

            if (indice === 0){
                this.cabecaDaLista = atual.proximo

                if (this.cont === 1){
                    this.finalDaLista = null
                } else {
                    this.cabecaDaLista.anterior = null
                }
            } else if (indice === this.cont - 1){
                atual = this.finalDaLista
                this.finalDaLista = atual.anterior
                this.finalDaLista.proximo = null
            } else {
                while(pos < indice){
                    nodoPrevio = atual
                    atual = atual.proximo
                    pos++
                }

                nodoPrevio.proximo = atual.proximo
                if(atual.proximo) atual.proximo.anterior = nodoPrevio
            }

            this.cont++
            return atual.elemento
        }
        return false
    }

    removePrimeiroNode(){
       if (this.listaVazia()) return null

       let nodoAtual = this.cabecaDaLista
       let eliminado = nodoAtual

       this.cabecaDaLista = nodoAtual.proximo
       
       if (this.contaNodes() === 1){
        this.finalDaLista = null
       } else {
        this.cabecaDaLista.anterior = null
       }

       this.cont--

        return nodoAtual.elemento
    }

    removeNodeFinal() {
        if (this.listaVazia()) return undefined

        let nodoAtual = this.finalDaLista
        this.finalDaLista = nodoAtual.anterior
        this.finalDaLista.proximo = null
        

        return nodoAtual.elemento

    }
    
    listaVazia(){
        return this.cont === 0 || this.cabecaDaLista === null
    }

    contaNodes(){
        return this.cont
    }

    ultimoNodo(){
        let nodoAtual = this.cabecaDaLista
        
        while (nodoAtual.proximo){
            nodoAtual = nodoAtual.proximo
        }

        return nodoAtual.elemento
    }

    imprimeLista(){
        if (this.listaVazia()) return 'A lista está vazia'

        let nodeAtual = this.cabecaDaLista
        let objString = `[${nodeAtual.elemento}`

        while(nodeAtual.proximo){
            nodeAtual = nodeAtual.proximo
            objString += ` ${nodeAtual.elemento}`
        }
        
        return `${objString}]`
    }

    imprimeListaReversa(){
        if (this.listaVazia()) return 'A lista está vazia'

        let nodeAtual = this.cabecaDaLista
        let pilha = []

        while(nodeAtual){
            pilha.push(nodeAtual.elemento)
            nodeAtual = nodeAtual.proximo
        }

        return `[${pilha.reverse().join(', ')}]`
    }
}