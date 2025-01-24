import Fila from './fila.js'

export class FilaDePrioridades extends Fila {
    constructor(){
        super()
    }

    enfileirar(elemento, prioridade = 0){
        
        const novoElemento = {elemento, prioridade}

        if (this.estaVazia()){
            this.itens[0] = novoElemento
            this.cont++
        } else {
            let i

            for (i=this.cont-1; i >=0; i--){
               if (this.itens[i].prioridade >= prioridade){
                    this.itens[i+1] = this.itens[i]
               } else {
                break
               }
            }

            this.itens[i+1] = novoElemento
            this.cont++
        }
    }

    imprimeFilaPrioridade() {
        if (this.estaVazia()) return ''
    
        let resultado = ''
        for (let i = 0; i < this.tamanho(); i++) {
            const { elemento, prioridade } = this.itens[i];
            resultado += `Elemento: ${elemento}, Prioridade: ${prioridade}\n`;
        }
        return resultado;
    }
    
}