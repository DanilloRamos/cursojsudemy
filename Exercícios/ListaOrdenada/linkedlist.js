import Nodo from "./Node.js";

export class LinkedList {

    constructor(){
        this.cont = 0
        this.cabecaDaLista = undefined
    }

    /*inserirNoFinal (elemento){
        let node = new Nodo(elemento)
        let nodeAtual

        if (this.listaVazia()){
            this.cabecaDaLista = node
        } else {
            nodeAtual = this.cabecaDaLista

            while(nodeAtual.proximo){
                nodeAtual = nodeAtual.proximo
            }
            nodeAtual.proximo = node
        }

        this.cont++
    }

   

    inserirEm(elemento, indice){
        if (indice >=0 && indice <= this.contaNodes()){
            let nodo = new Nodo(elemento)
            let anterior
            let posicaoAtual = 0
            let nodoAtual = this.cabecaDaLista

            if (indice === 0){
                nodo.proximo = nodoAtual
                this.cabecaDaLista = node
            } else {
                while (posicaoAtual++ < indice){
                    anterior = nodoAtual
                    nodoAtual = nodoAtual.proximo
                }

                anterior.proximo = nodo
                nodo.proximo = nodoAtual
            }

            this.cont++
            return true
        }

        return null
    }


    inserirNoInicio(elemento){
        let nodo =  new Nodo(elemento)
        let nodoAtual = this.cabecaDaLista

        nodo.proximo = nodoAtual
        this.cabecaDaLista = nodo

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
        if (indice >=0 && indice <= this.contaNodes()){
            let nodoAtual = this.cabecaDaLista
            let anterior
            let posicaoAtual = 0

            if (indice === 0){
                this.cabecaDaLista = nodoAtual.proximo
            } else {
                while(posicaoAtual++ < indice){
                    anterior = nodoAtual
                    nodoAtual = nodoAtual.proximo
                }

                anterior.proximo = nodoAtual.proximo
            }

            this.cont--
            return nodoAtual.elemento
        }
        return false
    }

    removePrimeiroNode(){
       if (this.listaVazia()) return null

       let nodoAtual = this.cabecaDaLista
       let eliminado = nodoAtual.elemento

       this.cabecaDaLista = nodoAtual.proximo
       this.cont--

        return eliminado
    }

    removeNodeFinal() {
        if (this.listaVazia()) return undefined

        if (!this.cabecaDaLista.proximo){
            let eliminado = this.cabecaDaLista.elemento
            this.cabecaDaLista = null
            return eliminado
        }

        let nodoAtual = this.cabecaDaLista
        let anterior

        while(nodoAtual.proximo){
            anterior = nodoAtual
            nodoAtual = nodoAtual.proximo
        }

        this.cont--
        anterior.proximo = null
        

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
    }*/

    imprimeLista(){
        if (this.listaVazia()) return 'A lista está vazia'

        let nodeAtual = this.cabecaDaLista
        let objString = `[${nodeAtual.elemento}`

        while(nodeAtual.proximo){
            objString = `${objString}, ${nodeAtual.elemento}`
            nodeAtual = nodeAtual.proximo
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