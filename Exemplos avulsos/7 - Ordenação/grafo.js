import { Fila } from './fila.js'
import { Dictionary } from './dicionario.js'

export class Grafo {

    constructor(direcionado = false){
       this.direcionado = direcionado
       this.vertices = []
       this.adjList = new Dictionary()

       this.Cores = {
        BRANCO: 0,
        CINZA: 1,
        PRETO: 2
        }
    }

    adicionaVertice(vertice){
        if(!this.vertices.includes(vertice)){
            this.vertices.push(vertice)
            this.adjList.set(vertice, [])
        }
    }

    adicionaAresta(vertice,w){
       if (!this.adjList.get(vertice)) this.adicionaVertice(vertice)       

       if (!this.adjList.get(w)) this.adicionaVertice(w)

       this.adjList.get(vertice).push(w)

       if (!this.direcionado) this.adjList.get(w).push(vertice)

    }

    getVertices(){
        return this.vertices
    }

    getAdjList(){
        return this.adjList
    }

    inicializaCor = function(){
        let cor = []

        for (let i=0; i<this.vertices.length; i++){
            cor[this.vertices[i]] = this.Cores.BRANCO
        }

        return cor
    }

    bfs = function(v, callback){
        let cor = inicializaCor()
        let fila = new Fila()

        fila.enfileirar(v)

        while(!fila.estaVazia()){
            let u = fila.desenfileirar
            let vizinhos = this.adjList.get(u)
            cor[u] = this.Cores.CINZA

            for (let i=0; i<vizinhos.length; i++){
                let w = vizinhos[i]

                if (cor[w] === this.Cores.BRANCO){
                    cor[w] = this.Cores.CINZA
                    fila.enfileirar(w)
                }
            }

            cor[u] = this.Cores.PRETO
            callback(u)
        }
    }

    dfs = function(callback) {
        let cor = inicializaCor()

        for (let i=0; i < this.vertices.length; i++){
            if (cor[vertices[i]] === this.Cores.BRANCO){
                dfsVisit(vertices[i], cor, callback)
            }
        }
    }

    dfsVisit = function(u, cor, callback){
        cor[u] = this.Cores.CINZA
        callback(u)

        let vizinhos = this.adjList.get(u)

        for (let i=0; i<this.vizinhos.length; i++){
            let w = this.vizinhos[i]

            if (cor[w] === this.Cores.BRANCO) {
                this.dfsVisit(w, cor, callback)
            }
        }

        cor[u] = this.Cores.PRETO
    }

    printNode(valor){
        console.log('Vértice visitado: ' + valor)
    }
    
    imprimeGrafo(){
        let s = ''
        let vizinhos

        for (let i=0; i<this.vertices.length; i++){
            s += this.vertices[i] + '->'
            vizinhos = this.adjList.get(this.vertices[i])

            for (let j=0; j<vizinhos.length; j++){
                s += vizinhos[j] + ' '
            }

            s += '\n'
        }

        return s
    }
}