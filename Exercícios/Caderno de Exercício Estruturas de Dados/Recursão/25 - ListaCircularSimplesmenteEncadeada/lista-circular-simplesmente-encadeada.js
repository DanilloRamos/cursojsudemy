import { Nodo } from "./lista-encadeada-modelo.js"

export class ListaEncadeadaCircular {
    constructor(){
        this.cabecaDaLista = null
        this.cont = 0
    }

    inserir(elemento){
        
        let node = new Nodo(elemento)
        let atual = this.cabecaDaLista

        if (this.tamanho() === 0){
            this.cabecaDaLista = node
        } else {
            while (atual.proximo !== this.cabecaDaLista && atual.proximo){
                atual = atual.proximo
            }

            atual.proximo = node
            node.proximo = this.cabecaDaLista
        }
        this.cont++
    }

    inserirEm(indice,elemento){
        
        if (indice >= 0 && indice < this.cont){
            
            let node = new Nodo(elemento)

            if (this.listaVazia()){
                this.cabecaDaLista = node
                node = node.proximo
            } else if (indice === 0){
                node.proximo = this.cabecaDaLista
                
                let atual = this.cabecaDaLista

                while(atual != this.cabecaDaLista){
                    atual = atual.proximo
                }

                atual.proximo = node
                this.cabecaDaLista = node
            } else {
                let atual = this.cabecaDaLista
                let anterior
                let posicao = 0

                while (posicao < indice){
                    anterior = atual
                    atual = atual.proximo
                    posicao++
                }

                anterior.proximo = node
                node.proximo = atual
            }
            
            this.cont++
            return true        
        }
        return false
    }

    remover(indice){
        if (indice< 0 || indice >= this.tamanho() || this.listaVazia()) return false 

        let atual = this.cabecaDaLista
        let anterior

        if (indice === 0){
            if (this.tamanho() === 1){
                this.cabecaDaLista = null
            } else {
                while (atual.proximo !== this.cabecaDaLista){
                    atual = atual.proximo
                }

                this.cabecaDaLista = this.cabecaDaLista.proximo
                atual.proximo = this.cabecaDaLista
            }
        } else {
            let posicao = 0
            atual = this.cabecaDaLista

            while(posicao < indice){
                anterior = atual
                atual = atual.proximo
                posicao++
            }

            anterior.proximo = atual.proximo
        }

        this.cont--
        return true
    }
    
    listaVazia(){
        return this.cont === 0 || this.cabecaDaLista === null
    }

    nodoInicial(){
        return this.cabecaDaLista
    }

    nodoFinal(){
        let atual = this.cabecaDaLista

        while (atual.proximo !== this.cabecaDaLista){
            atual = atual.proximo
        }

        return atual.elemento
    }

    tamanho(){
        return this.cont
    }

    exibeLista() {
        if (this.listaVazia()) return 'A lista está vazia'
    
        let objString = `[${this.cabecaDaLista.elemento}]`
        let atual = this.cabecaDaLista.proximo
    
        while (atual !== null && atual !== this.cabecaDaLista) {
            objString = objString.slice(0, -1) + `, ${atual.elemento}]`
            atual = atual.proximo
        }
    
        return objString;
    }
}