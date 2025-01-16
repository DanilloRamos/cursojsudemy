import ListaEncadeada  from './lista-encadeada.js'


const lista = new ListaEncadeada()

lista.inserir(5)
lista.inserir(10)
lista.inserir(15)
lista.imprimeLista()

lista.remove(15)
console.log(lista.imprimeLista())