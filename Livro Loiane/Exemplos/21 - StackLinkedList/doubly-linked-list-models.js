import LinkedList from "./linkedlist.js";
import  defaultEquals  from "./util";

export class Node {
    constructor(element, next) {
      this.element = element;
      this.next = next;
    }
  }
  export class DoublyNode extends Node {
    constructor(element, next, prev) {
      super(element, next);
      this.prev = prev;
    }
  }
