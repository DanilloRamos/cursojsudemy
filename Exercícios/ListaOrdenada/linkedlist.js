import Nodo from "./Node.js";

export class LinkedList {

    constructor(){
        this.cont = 0
        this.cabecaDaLista = null
    }

    inserir(elemento) {
        let node = new Nodo(elemento)
        let atual = this.cabecaDaLista
        let anterior = null
    
        if (this.listaVazia()) {
            this.cabecaDaLista = node
            this.cont++
            return true
        }
    
       
        if (node.elemento < atual.elemento) {
            node.proximo = this.cabecaDaLista
            this.cabecaDaLista = node
            this.cont++
            return true
        }
    
        
        while (atual && atual.elemento < node.elemento) {
            anterior = atual
            atual = atual.proximo
        }
    
        
        anterior.proximo = node
        node.proximo = atual
    
        this.cont++
        return true
    }

    remove(indice){
        if (indice >= 0 && indice <= this.tamanho()){
            
            let atual = this.cabecaDaLista
            let anterior

            if (indice === 0){
                this.cabecaDaLista = atual.proximo
            } else {
                anterior = this.retornaElmentoEm(indice-1)
                atual = anterior.proximo
                anterior.proximo = atual.proximo
            }

            this.cont--
            return atual.elemento
        }
    }

    retornaElmentoEm(indice){
        if (indice >=0 && indice >= this.tamanho()){
            
            let atual = this.cabecaDaLista
            
            if (indice === 0){
                 return this.cabecaDaLista.elemento
            } else {
                for (let i=0; i<indice && atual!=null; i++){
                    atual = atual.proximo
                }
            }

            return atual
        }
    }

    listaVazia(){
        return this.cont === 0 || this.cabecaDaLista === null
    }

    tamanho(){
        return this.cont
    }

    imprimeLista(){
        
        if (this.cabecaDaLista === null) return 'A lista está vazia'

        let objString = `[${this.cabecaDaLista.elemento}`
        let atual = this.cabecaDaLista.proximo
        for (let i=1; i<this.cont; i++){
            objString = `${objString}, ${atual.elemento}`
            atual = atual.proximo
        }

        return `${objString}]`
    }
}