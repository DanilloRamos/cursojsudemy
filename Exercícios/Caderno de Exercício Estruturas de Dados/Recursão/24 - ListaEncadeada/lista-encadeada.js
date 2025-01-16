import { Nodo } from "./lista-encadeada-modelo.js"
import { defaultEquals } from "./util.js"

export default class ListaEncadeada{
    constructor (equalsFn = defaultEquals){
        this.cont = 0
        this.cabeca = undefined
        this.equalsFn = equalsFn
    }

    inserir (elemento){
        const node = new Nodo(elemento)
        let atual

        if (this.cabeca == null){
            this.cabeca = node
        } else {
            atual = this.cabeca

            while(atual.proximo != null){
                atual = atual.proximo
            }

            atual.proximo = node
        }

        this.cont++
    }

    removerEm (indice){
        
        if (indice >=0 && indice < this.cont){
            let atual = this.cabeca

            if (indice === 0){                
                this.cabeca = atual.proximo
            } else {
                const anterior = this.retornaElementoEm(indice-1)
                atual = anterior.proximo
                anterior.proximo = atual.proximo
            }

            this.cont--
            return atual.elemento
        }
        
        return undefined
    }

    retornaElementoEm (indice){
        if (indice >=0 && indice <= this.cont){
            let nodo = this.cabeca

            for (let i=0; i < indice && nodo != null; i++){
                nodo = nodo.proximo
            }

            return nodo
        }

        return undefined
    }

    inserirEm (elemento, indice){
        
        if (indice >=0 && indice < this.cont){
            const nodo = new Node(elemento)

            if (indice === 0) {
                const atual = this.cabeca
                nodo = atual
                this.cabeca = nodo
            } else {
               const anterior = this.retornaElementoEm(indice-1)
               const atual = atual.proximo
               nodo.proximo = atual
               anterior.proximo = nodo
            }

            this.cont++
            return true
        }

        return false
    }

    indiceDe(elemento){
        let atual = this.cabeca

        for (let i=0; i<this.cont && atual != null; i++){
            if (this.equalsFn(elemento, atual.elemento)){
                return i
            }

            atual = atual.proximo
        }

        return -1
    }

    remove(elemento){
        const indice = this.indiceDe(elemento)
        return this.removerEm(indice)
    }

    tamanho(){
        return this.cont
    }

    estaVazia(){
        return this.tamanho() === 0
    }

    retornaCabeca(){
        return this.cabeca
    }

    imprimeLista(){
        if (this.cabeca === null) ''

        let objString = `${this.cabeca.elemento}`
        let atual = this.cabeca.proximo

        for (let i=1; i<this.tamanho() && atual != null; i++){
            objString = `${objString}, ${atual.elemento}`
            atual = atual.proximo
        }

        return objString
    }

}