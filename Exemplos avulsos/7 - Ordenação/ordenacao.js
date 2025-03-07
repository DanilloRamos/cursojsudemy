export class Ordenacao {
    
    constructor () {
        this.itens = []
    }

    insere (item){
        this.itens.push(item)
    }

    bubbleSort(){
        for (let i=0; i < this.itens.length; i++){
            for (let j=0; j < this.itens.length-1; j++){
                if (this.itens[j] > this.itens[j+1]){
                    this.swap(this.itens, j, j+1)
                }
            }
        }
    }

    selectionSort(){
        let indexMin
        for (let i=0; i < this.itens.length-1; i++){
            indexMin = i
            for (let j=i; j < this.itens.length-1; j++){
                if (this.itens[indexMin] > this.itens[j]){
                    indexMin = j
                }
            }

            if (i !== indexMin){
                this.swap(this.itens, i, indexMin)
            }
        }
    }

    insertionSort(){
        let j
        let temp

        for (let i=1; i<this.itens.length-1; i++){
            j = i
            temp = this.itens[i]

            while(j > 0 && this.itens[j-1] > temp){
                this.itens[j] = this.itens[j-1]
                j--
            }

            this.itens[j] = temp
        }

    }

    mergeSort(){
        this.itens = this.mergeSortRec(this.itens)
    }

    mergeSortRec(itens){
       if (itens.length === 1) return itens

       let meio = Math.floor(itens.length/2)
       let esquerda = itens.slice(0, meio)
       let direita = itens.slice(meio, itens.length)

       return this.merge(this.mergeSortRec(esquerda), this.mergeSortRec(direita))
    }

    merge(esquerda, direita){
        let result = []
        let iEsq = 0
        let iDir = 0

        while (iEsq < esquerda.length && iDir < direita.length){
            if (esquerda[iEsq] < direita[iDir]) {
                result.push(esquerda[iEsq++])
            } else {
                result.push(direita[iDir++])
            }
        }

        while (iDir < direita.length){
            result.push (direita[iDir++])
        }

        while (iEsq < esquerda.length){
            result.push (esquerda[iEsq++])
        }

        return result
    }

   quickSort(){
        this.quick(this.itens, 0, this.itens.length-1)
   }

   quick(itens, esquerda, direita){
        let index

        if (itens.length > 1) {
            index = this.particao(itens, esquerda, direita)

            if (esquerda < index-1) {
                this.quick(itens, esquerda, index-1)
            }

            if (index < direita){
                this.quick(itens, index, direita)
            }
        }
   }

   particao(itens, esquerda, direita){
        let pivo = itens[Math.floor((direita+esquerda)/2)]
        let i = esquerda
        let j = direita

        while(i <= j){
            while(itens[i] < pivo) {
                i++
            }
            while(itens[j] > pivo) {
                j--
            }

            if (i <= j){
                this.swap(itens, i, j)
                i++
                j--
            }
        }

        return i
   }

    swap(itens, index1, index2){
        let aux = itens[index1]
        itens[index1] = itens[index2]
        itens[index2] = aux
    }

    toString(){
        return this.itens.join(', ')
    }
}