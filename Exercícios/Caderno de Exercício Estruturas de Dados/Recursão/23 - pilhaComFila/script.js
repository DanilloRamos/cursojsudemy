import { Fila } from "./fila.js";

const fila = new Fila()

function desempilha(){
    const armazenaTopo = fila.fimDaFila()

    while(!fila.vazia()){
        const atual = fila.desenfileira()

        if (atual === armazenaTopo){
            break
        }
        fila.enfileira(atual)
    }

}

fila.enfileira(1)
fila.enfileira(2)
fila.enfileira(3)
fila.enfileira(4)
fila.enfileira(5)
console.log(`Pilha: ${fila.imprimeFila()}`)

desempilha()
console.log(`Pilha: ${fila.imprimeFila()}`)