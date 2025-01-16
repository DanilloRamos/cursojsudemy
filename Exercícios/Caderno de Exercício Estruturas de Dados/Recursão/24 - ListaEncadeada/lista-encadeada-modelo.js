export class Nodo {
    constructor(elemento, proximo) {
      this.elemento = elemento;
      this.proximo = proximo;
    }
  }
  export class DoublyNode extends Nodo {
    constructor(element, next, prev) {
      super(element, next);
      this.prev = prev;
    }
  }