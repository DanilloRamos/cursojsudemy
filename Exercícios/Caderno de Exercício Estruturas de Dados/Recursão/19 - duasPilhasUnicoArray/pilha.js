export class Pilha {
    constructor(){
        this.itens = []
        this.topo1 = -1
        this.topo2 = 0
    }

    empilha(valor, numeroPilha){
        if (numeroPilha === 1){
          this.topo1++
          this.itens.splice(this.topo1, 0, valor)
        } else if (numeroPilha === 2){
            this.itens.splice(this.itens.length - this.topo2, 0, valor)
            this.topo2++
        }
    }

    desempilha(numeroPilha){
        if (numeroPilha === 1 && this.topo1 >= 0){
           const valor = this.itens.splice(this.topo1, 1)[0]
           this.topo1--
           return valor
        } else if (numeroPilha === 2 && this.topo2 > 0) {
            const valor = this.itens.splice(this.itens.length - this.topo2, 1)[0]
            this.topo2--
            return valor
        }
    }

    topo(){
        return this.itens[this.itens.length-1]
    }

    vazia(){
        return this.itens.length === 0
    }

    tamanho(){
      const tamanho1 = this.topo1+1
      const tamanho2 = this.topo2

      console.log(`Tamanho da Pilha 1: ${tamanho1}`)
      console.log(`Tamanho da Pilha 2: ${tamanho2}`)
    }

    esvazia(){
        return this.itens = []
    }

    imprimePilha(){
        const pilha1 = this.itens.slice(0,this.topo1+1)
        const pilha2 = this.itens.slice(this.itens.length - this.topo2)

        console.log(`Pilha 1: ${pilha1.join(', ')}`)
        console.log(`Pilha 2: ${pilha2.join(', ')}`)
    }
}