export class Set {
    
    constructor(){
        this.itens = {}
        this.cont = 0
    }

    existe(elemento){
        return this.itens.hasOwnProperty(elemento)
    }

    adiciona(elemento){
        if (!this.existe(elemento)){
            this.itens[elemento] = elemento
            this.cont++
            return true
        }

        return false
    }

    remove(elemento){
        if (this.existe(elemento)){
            delete this.itens[elemento]
            this.cont--
            return true
        }

        return false
    }

    esvaziaSet(){
        return this.itens = {}
    }

    tamanho(){
        return this.cont
    }

    elementos(){
        let  valor = []
        let chaves = Object.keys(this.itens)

        for (let i=0; i < chaves.length; i++){
            valor.push(this.itens[chaves[i]])
        }

        return valor
    }

    uniao(novoSet){
        
        let uniao = new Set()
        let elementos = this.elementos()

        for (let i=0; i<elementos.length; i++){
            uniao.adiciona(elementos[i])
        }

        elementos = novoSet.elementos()

        for (let i=0; i<elementos.length; i++){
            uniao.adiciona(elementos[i])
        }

        return uniao
    }

    interseccao(novoSet){
        let interseccao = new Set()
        let elementos = this.elementos()

        for (let i=0; i < elementos.length; i++){
            if (novoSet.existe(elementos[i])) {
                interseccao.adiciona(elementos[i])
            }
        }

        return interseccao
    }

    diferenca(novoSet){
        let diferenca = new Set()
        let elementos = this.elementos()

        for (let i=0; i < elementos.length; i++){
            if (!novoSet.existe(elementos[i])){
                diferenca.adiciona(elementos[i])
            }
        }

        return diferenca
    }

    ehSubconjunto(novoSet){
        
        let subconj = false
        let elementos = this.elementos()

        if (this.tamanho() > novoSet.tamanho()) return false
        
        for (let i=0; i < elementos.length; i++){
            if (novoSet.existe(elementos[i])){
                subconj = true
            }
        }

        return subconj
    }

}