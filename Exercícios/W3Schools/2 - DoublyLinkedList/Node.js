export default class Nodo {
    constructor(elemento, proximo = null){
        this.elemento = elemento
        this.proximo = undefined
    }
}

export class DuploNodo extends Nodo{
    constructor(elemento, proximo = null, anterior = null){
        super(elemento, proximo)
        this.anterior = anterior
    }
}