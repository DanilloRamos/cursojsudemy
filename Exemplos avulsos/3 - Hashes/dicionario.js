import { ListaEncadeada } from '/.lista-encadeada.js'
import { ValuePair } from './valuePair.js'

export class HashTable {
    constructor(){
        this.table = {}
    }

    inserir(chave, valor){
        let posicao = this.loseloseHashCode(chave)

        if (this.table[posicao] == null){
            this.table[posicao] = new ListaEncadeada()
        }

        this.table[posicao].inserirNaLista(new ValuePair(chave, valor))
    }

    remover(chave){
        let posicao = this.loseloseHashCode(chave)

        if (this.table[posicao] !== undefined){
            let atual = this.table[posicao].retornaCabeca()

            while(atual.proximo){
                if (atual.elemento.chave === chave) {
                    this.table[posicao].remove(atual.elemento)
                    if (this.table[posicao].estaVazia()){
                        this.table[posicao] = undefined
                    }

                    return true      
                }
                atual = atual.proximo   
            }

            if (atual.elemento.chave === chave){
                this.table[posicao].remove(atual.elemento)

                if (this.table[posicao].estaVazia()){
                    this.table[posicao] = undefined
                }

                return true
            }
        }

        return false
    }

    get(chave){
        let posicao = this.loseloseHashCode(chave)

        if (this.table[posicao] !== undefined){
            let atual = this.table[posicao].retornaCabeca()

            while(atual.proximo){
                if (atual.elemento.chave === chave){
                    return atual.elemento.valor
                }

                atual = atual.proximo
            }

            if (atual.elemento.chave === chave){
                return atual.elemento.valor
            }
        }

        return undefined
    }
  
    tamanho(){
        return this.table.length
    }

    loseloseHashCode(chave){
        let hash = 0
        for (let i=0; i<chave.length; i++){
            hash += chave.charCodeAt(i)
        }
        return hash%37
    }

    toString(){
        Object.keys(this.table).forEach(posicao => {
            let lista = this.table[posicao]
            let atual = lista.retornaCabeca()
            let valores = []
    
            while (atual) {
                valores.push(`${atual.elemento.chave}: ${atual.elemento.valor}`)
                atual = atual.proximo
            }
    
            console.log(`${posicao}: ${valores.join(' -> ')}`)
        })
    }
    
}