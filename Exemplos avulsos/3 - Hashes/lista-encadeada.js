import { Nodo } from "./lista-encadeada-modelo.js"

export default class ListaEncadeada{
    constructor (){
        this.cont = 0
        this.cabeca = undefined
    }

    inserirNaLista (elemento){
        let node = new Nodo(elemento)
        let atual

        if (this.tamanho() === 0){
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
                let anterior = this.retornaElementoEm(indice-1)
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

    inserirEm (indice, elemento){

        if (indice >=0 && indice <= this.tamanho()){
            let node = new Nodo(elemento)
            let atual = this.cabeca
            let anterior
            let posicao = 0

            if (indice === 0){
                if (this.cabeca === null){
                    this.cabeca = node
                } else {
                    while (posicao < indice){
                        anterior = atual
                        atual = atual.proximo
                    }
                }
            }
        }

        return false
    }

    indiceDe(elemento){
        let atual = this.cabeca

        for (let i=0; i<this.cont && atual != null; i++){
            if (elemento === atual.elemento){
                return i
            }

            atual = atual.proximo
        }

        return -1
    }

    moveParaInicio(elemento){
        
        //verifica se a lista está vazia ou se o nó já está no início
        if (!this.cabeca || this.cabeca.elemento === elemento){
            return undefined
        }

        let anterior = null
        let atual = this.cabeca

        //procura o nó com o elemento
        while (atual && atual.elemento !== elemento){
            anterior = atual
            atual = atual.proximo
        }
        
        //nó não encontrado
        if (!atual){
            console.log(`Elemento não encontrado na lista`)
        }

        //remove o nó na posição atual
        if (anterior){
            anterior.proximo = atual.proximo
        }

        //insere o nó no inicio da lista
        atual.proximo = this.cabeca
        this.cabeca = atual
    }

    remove(elemento){
        const indice = this.indiceDe(elemento)
        return this.removerEm(indice)
    }

    removeUltimo(){
        if (this.tamanho() === 1){
            this.cabeca = null
        } else {
            
            let atual = this.cabeca
            let anterior

            while (atual.proximo){
                anterior = atual
                atual = atual.proximo
            }

            anterior.proximo = null
            this.cont--
            return true
        }

        return false
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

    fimDaLista(){
        let atual = this.cabeca

        while(atual.proximo){
            atual = atual.proximo
        }

        return atual.elemento
    }

    inverteLista(){
        let pilha = []
        let atual = this.cabeca

        while (atual){
            pilha.push(atual.elemento)
            atual = atual.proximo
        }

        let reverso = pilha.reverse().join('')

        return reverso
    }

    transformaEmPilha(){
        let pilha = []
        let atual = this.cabeca

        while(atual){
            pilha.push(atual)
            atual = atual.proximo
        }

        return pilha.join('')
    }

    imprimeLista(){
        if (this.cabeca === null) ''

        let objString = `[${this.cabeca.elemento}`
        let atual = this.cabeca.proximo

        for (let i=1; i<this.tamanho() && atual != null; i++){
            objString = `${objString}, ${atual.elemento}`
            atual = atual.proximo
        }

        return `${objString}]`
    }

}