export class Deque {
    constructor(){
        this.itens = {}
        this.cont = 0
        this.menorCont = 0
    }

    adicionaNoInicio(elemento){
        if (this.vazia()){
            this.adicionaNoFinal(elemento)
        } else if (this.menorCont>0){
            this.menorCont--
            this.itens[this.menorCont] = elemento            
        } else {
            for (let i=this.cont; i>0; i--){
                this.itens[i] = this.itens[i-1]
            }

            this.cont++
            this.menorCont = 0
            this.itens[0] = elemento
        }
    }

    adicionaNoFinal(elemento){
        this.itens[this.cont] = elemento
        this.cont++
    }

    removeDoInicio(){
        if (this.vazia()) return undefined

        const retirado = this.itens[this.menorCont]
        delete this.itens[this.menorCont]
        this.menorCont++
        return retirado
    }

    removeDoFinal(){
        if (this.vazia()) return undefined

        const removido = this.itens[this.cont]
        delete this.itens[this.cont]
        this.cont--
        return removido
    }

    final(){
        if (this.vazia()) return undefined

        return this.itens[this.cont]
    }

    inicio(){
        if (this.vazia()) return undefined

        return this.itens[this.menorCont]
    }

    vazia(){
        return this.tamanhoDeque() === 0
    }

    tamanhoDeque(){
        return this.cont - this.menorCont
    }

    zeraDeque(){
        this.itens = []
        this.cont = 0
        this.menorCont = 0
    }

    imprimeDeque(){
        if (this.vazia()) return ''

       let objString = `${this.itens[this.menorCont]}`

       for (let i=this.menorCont+1; i<this.cont; i++){
        objString = `${objString}, ${this.itens[i]}`
       }

       return objString
    }
}