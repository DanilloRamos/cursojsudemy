import { ListaEncadeada } from '/.lista-encadeada.js'
import { ValuePair } from './valuePair.js'

export class HashTable {
    constructor(){
        this.table = {}
    }

    /*inserir(chave, valor){
        let posicao = this.loseloseHashCode(chave)
        this.table[posicao] = valor
    }*/

    /*remover(chave){
       delete this.table[this.loseloseHashCode(chave)]
       return true
    }*/

    inserir(chave, valor){
        let posicao = this.loseloseHashCode[chave]

        if (this.table[posicao] === undefined){
            this.table[posicao] = new ListaEncadeada()
        }

        this.table[posicao].append(new ValuePair(chave, valor))
    }

    remover(chave){
        let posicao = this.loseloseHashCode[chave]

        if (this.table[posicao !== undefined]){
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
        return this.table[this.loseloseHashCode(chave)]
    }

    tamanho(){
        return this.table
    }

    loseloseHashCode(chave){
        let hash = 0
        for (let i=0; i<chave.length; i++){
            hash += chave.charCodeAt(i)
        }
        return hash%37
    }

    toString(){
        for (let chave in this.table){
            console.log(`${chave}: ${this.table[chave]}`)
        }
    }
}