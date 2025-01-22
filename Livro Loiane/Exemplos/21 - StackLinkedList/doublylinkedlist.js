import { defaultEquals } from './util.js'
import { DoublyNode } from './doubly-linked-list-models.js'
import LinkedList from './linkedlist.js'

export class DoublyLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals){
      super(equalsFn) //inicia as propriedades equalsFn, count e head
      this.tail = undefined //referência ao último elemento da lista
    }

    push(element) {
        const node = new DoublyNode(element);
        if (this.head == null) {
          this.head = node;
          this.tail = node; // NEW
        } else {
          // attach to the tail node // NEW
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
        }
        this.count++;
      }

    insert (element, index){
        if (index >=0 && index <=this.count){// verifica se o índice informado está dentro do intervalo válido
            const node = new DoublyNode(element)
            let current = this.head

            if (index === 0){ 
                if (this.head === null){ //Lista vazia
                    this.head = node // ambos apontam para o novo nó
                    this.tail = node
                } else {
                    node.next = this.head // novo nó aponta para o primeiro elemento da lista
                    current.prev = node //aponta para o novo elemento, ao invés de apontar para undefined
                    this.head = node
                }
            } else if (index ===  this.count){ //adicionando por último
                current = this.tail //current referencia o último elemento
                current.next = node // current.next agora aponta para o novo nó
                node.prev = current // 
                this.tail = node //tail apontará para node ao invés de current
            } else { //inserindo em qualquer lugar
                const previous = this.getElementAt(index-1) //itera pela lista até alcançar a posição desejada
                current = previous.next //o elemento será inserido entre current e previous
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }

            this.count++
            return true
        }

        return false
    }

    removeAt(index){
        if (index >=0 && index <=this.count){
            let current = this.head

            if (index === 0){
                this.head = current.next

                if (this.count === 1){// se houver apenas 1 item, atualiza tail também
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.count - 1) {// último item
                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            } else {
                current = this.getElementAt(index)
                const previous = current.prev
                //faz a ligação do previous com o next de current - pula esse elemento para removê-lo
                previous.next = current.next
                current.next.prev = previous
            }

            this.count--
            return current.element
        }
        return undefined
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current != null) {
          if (this.equalsFn(element, current.element)) {
            return index;
          }
          index++;
          current = current.next;
        }
        return -1;
      }

    getHead() {
        return this.head;
      }
    
      getTail() {
        return this.tail;
      }
    
      clear() {
        super.clear();
        this.tail = undefined;
      }
    
      toString() {
        if (this.head == null) {
          return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        while (current != null) {
          objString = `${objString},${current.element}`;
          current = current.next;
        }
        return objString;
      }
    
      inverseToString() {
        if (this.tail == null) {
          return '';
        }
        let objString = `${this.tail.element}`;
        let previous = this.tail.prev;
        while (previous != null) {
          objString = `${objString},${previous.element}`;
          previous = previous.prev;
        }
        return objString;
      }
  }