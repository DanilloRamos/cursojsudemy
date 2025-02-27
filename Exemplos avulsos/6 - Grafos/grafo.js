import { Fila } from './fila.js'
import { Dictionary } from './dicionario.js'

export class Grafo {

    constructor(direcionado = false){
       this.direcionado = direcionado
       this.vertices = []
       this.adjList = new Dictionary()
    }

    adicionaVertice(vertice){
        if(!this.vertices.includes(vertice)){
            this.vertices.push(vertice)
            this.adjList.set(vertice, [])
        }
    }

    adicionaAresta(vertice,w){
        this.adjList.get(vertice).push(w)
        this.adjList.get(w).push(vertice)
    }

    inicializaCor(){
        let cor = []

        for (let i=0; i<this.vertices.length; i++){
            cor[this.vertices[i]] = 'branco'
        }

        return cor
    }

    buscaEmLargura(vertice, callback){
        let cor = this.inicializaCor()
        let fila = new Fila()

        fila.enfileirar(vertice)

        while(!fila.estaVazia()){
            let u = fila.desenfileirar()
            let vizinhos = this.adjList.get(u)
            cor[u] = 'cinza'

            for (let i=0; i<vizinhos.length; i++){
                let w = vizinhos[i]

                if (cor[w] === 'branco'){
                    cor[w] = 'cinza'
                    fila.enfileirar(w)
                }
            }
            cor[u] = 'preto'
            callback(u)
        }
    }

    imprimeNode(valor){
        console.log('Vértice visitado: '+valor)
    }

    imprimeGrafo(){
        let s = ''
        let vizinhos

        for (let i=0; j<this.vertices.length; i++){
            s += this.vertices[i] + '->'
            vizinhos = this.adjList.get(this.vertices[i])

            for (let j=0; i<vizinhos.length; j++){
                s += vizinhos[j] + ' '
            }

            s += '\n'
        }

        return s
    }
}