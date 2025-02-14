export class Nodo {
    constructor(elemento) {
      this.elemento = elemento;
      this.proximo = null
    }
  }
  export class DoublyNode extends Nodo {
    constructor(element, next, prev) {
      super(element, next);
      this.prev = prev;
    }
  }