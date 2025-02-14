import { Node } from "./node.js"

export default class Arvore {
    
    constructor(){
        this.raiz = null
    }

    inserir(node){
        var novoNode = new Node(node)

        if (this.raiz === null){
            this.raiz = novoNode
        } else {
            this.insereNode (this.raiz, novoNode)
        }
    }

    insereNode(node, novoNode){
        if (novoNode.chave < node.chave){
            if (node.esquerda === null){
                node.esquerda = novoNode
            } else {
                this.insereNode(node.esquerda, novoNode)
            }
        } else {
            if (node.direita === null){
                node.direita = novoNode
            } else {
                this.insereNode(node.direita, novoNode)
            }
        }
    }


    busca(chave){
        return  this.buscaNode(this.raiz, chave)
    }

    buscaNode(node, chave){
        if (node === null){
            return false
        } 
        if (chave < node.chave){
            return this.buscaNode(node.esquerda, chave)
        } else if (chave > node.chave) {
            return this.buscaNode(node.direita, chave)
        } else {
            return true
        }
    }

    remove(chave){
        this.raiz = this.removeNode(this.raiz, chave)
    }

    removeNode(node, chave){
        if (node === null) {
            return null
        }
        if (chave < node.chave){
            node.esquerda = this.removeNode(node.esquerda, chave)
            return node
        } else if (chave > node.chave){
            node.direita = this.removeNode(node.direita, chave)
            return node
        } else {
            if (node.esquerda === null && node.direita === null){
                node = null
                return node
            }

            if (node.esquerda === null){
                node = node.direita
                return node
            } else if (node.direita === null){
                node = node.esquerda
                return node
            }

            let aux = this.encontraMenorNode(node.direita)
            node.chave = aux.chave
            node.direita = this.removeNode(node.direita, aux.chave)

            return node
        }
    }

    minimo(){
        return this.minNode(this.raiz)
    }

    minNode(node){
        if (node){
            while(node && node.esquerda !== null){
                node = node.esquerda
            }

            return node.chave
        }
        return null
    }

    encontraMenorNode(node){
        while(node && node.esquerda !== null){
            node = node.esquerda
        }
        return node        
    }



    maximo(){
        return this.maxNode(this.raiz)
    }

    maxNode(node){
        if (node){
            while(node && node.direita !== null){
                node = node.direita
            }

            return node.chave
        }

        return null
    }

    percursoEmOrdem(callback){
        this.percursoEmOrdem(this.raiz, callback)
    }

    percursoEmOrdemNode(node, callback){
        if (node !== null){
            this.percursoEmOrdemNode(node.esquerda, callback)
            callback(node, chave)

            this.percursoEmOrdemNode(node.direita, callback)
        }
    }

    percursoPreOrdem(){
        
    }

    percursoPosOrdem(){}
}