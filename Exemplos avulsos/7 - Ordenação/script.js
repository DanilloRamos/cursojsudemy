import { Grafo } from "./grafo.js"

let grafo = new Grafo()
let meusVertices = ['A','B','C','D','E','F','G','H','I']

for (let i=0; i<meusVertices.length; i++){
    grafo.adicionaVertice(meusVertices[i])
}

grafo.adicionaAresta('A','B')
grafo.adicionaAresta('A','C')
grafo.adicionaAresta('A','D')
grafo.adicionaAresta('C','D')
grafo.adicionaAresta('C','G')
grafo.adicionaAresta('D','G')
grafo.adicionaAresta('D','H')
grafo.adicionaAresta('B','E')
grafo.adicionaAresta('B','F')
grafo.adicionaAresta('E','I')

console.log(grafo.imprimeGrafo())

grafo.buscaPorLargura(meusVertices[0], grafo.imprimeNode)