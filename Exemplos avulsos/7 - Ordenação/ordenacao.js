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

   /*sliceObject(obj, inicio, final) {
        const chaves = Object.keys(this.itens).slice(inicio,final)
        const result = {}

        chaves.forEach(chave => {
            result[chave] = obj[chave]
        })

        return result
   }*/

    swap(itens, index1, index2){
        let aux = itens[index1]
        itens[index1] = itens[index2]
        itens[index2] = aux
    }

    toString(){
        return this.itens.join(', ')
    }
}