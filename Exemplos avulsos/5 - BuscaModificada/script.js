function buscaModificada(vetor, alvo, inicio, fim){
    if (inicio > fim) return -1

    let esquerda
    let direita

    let meio = Math.floor((inicio + fim)/2)

    if (vetor [meio] === alvo){
        esquerda = buscaModificada(vetor, alvo, inicio, meio-1)
        
        return esquerda !== -1 ? esquerda : meio
    }

    esquerda = buscaModificada(vetor, alvo, inicio, meio-1)
    direita = buscaModificada(vetor, alvo, meio+1, fim)    

    if (esquerda !== -1 && direita !== -1){
        return Math.min(esquerda, direita)
    }

    return esquerda !== -1 ? esquerda:direita
}

function buscaElemento(vetor, alvo){
    return buscaModificada(vetor, alvo, 0, vetor.length - 1)
}

function fat (n){
    if (n === 1 || n === 0) return 1
    
    return n * fat(n-1)
}

function superFat(n){
    if (n === 1 || n === 0) return 1
    
    return fat(n) * superFat(n-1)
}

function potencia(base,expoente){
    if (base === 1) return 1
    if (expoente === 0) return 1
    
    return base * potencia(base, expoente-1)
}


function hiperFat(n){
    if (n === 1) return 1
    
    return potencia(n, n) * hiperFat(n-1)
}

function fatExp(n){
    if (n === 1) return 1
    
    return potencia(n,(fatExp(n-1)))
}

function tribonacci(n){
    if (n === 0) return 1
    if (n === 1) return 2
    if (n === 2) return 3
    
    return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)
}

function tetranacci(n){
    if (n === 1) return 0
    if (n === 2) return 0
    if (n === 3) return 0
    if (n === 4) return 1
    
    
    return tetranacci(n-1) + tetranacci (n-2) + tetranacci(n-3) + tetranacci(n-4)
}

function padovan(n){
    if (n === 0) return 1
    if (n === 1) return 1
    if (n === 2) return 1
    
    return padovan(n-2) + padovan(n-3)
}

function pell(n){
    if (n === 0) return 0
    if (n === 1) return 1
    
    return 2*pell(n-1) + pell(n-2)
}

function catalan(n){
    if (n === 0) return 1
    
    return (2*(2*n-1))/(n+1) * catalan(n-1)
}

function fibLetra(n){
    
    if (n === 0) return 'b'
    if (n === 1) return 'a'
    
    return fibLetra(n-1) + fibLetra(n-2)
}

function binario(n){
    if (n === 0) return '0'
    if (n === 1) return '1'
    
    return binario(Math.floor(n/2)) + (n%2)
}

function multiplicar(a,b){
    if (a === 0 || b === 0) return 0
    
    return a + multiplicar(a, b-1)
}

function sequenciaF(n){
    if (n === 1) return 1
    if (n === 2) return 2
    
    return 2*(sequenciaF(n-1)) + 3*(sequenciaF(n-2))
}

function inverteString(str){
    if (str.length === 0) return ''
    
    return str[str.length-1] + inverteString(str.slice(0,-1))
}

function palindromo(str){
    let palindromo = false
    
    if (str === inverteString(str)){
        palindromo = true
    }
    
    return palindromo
}

function multiplicacaoRussa(a,b){
    if (a === 0) return 0

    let soma = (a%2 !== 0) ? b : 0

    return soma + multiplicacaoRussa(Math.floor(a/2), b*2)
}

function h(m,n){
    if (n === 1) return m+1
    if (m === 1) return n+1

    return h(m, n-1) + h(m-1,n)
}

function acherman(m,n){
    if (m === 0) return n+1
    if (n === 0) return acherman(m-1, 1)

    return acherman(m-1, acherman(m, n-1))
}

function somaSerie(i,j,k=0){
    if (i > j) return 0

    return i + somaSerie(i+k, j, k)
}

function calculaSerieS(n){
    if (n === 0) return (1 + Math.pow(1,2)/1)

    return ((1 + Math.pow(n,2))/n) + calculaSerieS(n-1)
}

function menorElemento(vetor, indice = 0){
    if (indice === vetor.length-1) return vetor[indice]

    let menor = menorElemento(vetor, indice + 1)
    
    return Math.min(vetor[indice], menor)
}

function converteBinario(n){
    if (n === 0) return '0'
    if (n === 1) return '1'

    return n % 2 + converteBinario(Math.floor(n/2))
}

function encontrarCaminho(maze, x=0, y=0,caminho = []){
    let tamanho = maze.length

    //caso base: fora dos limites ou posição bloqueada (1)
    if (x < 0 || y < 0 || x >= tamanho || y >= tamanho || maze[x][y] === 1) return false 

    if (maze[x][y] === -1) return false //marca como falsa a posição já visitada

    caminho.push([x,y]) //adiciona a posição ao caminho

    //chegada ao destino
    if (x ===  tamanho-1 && y === tamanho-1) {
        console.log(caminho)
        return true
    }

    maze[x][y] = -1

    if (encontrarCaminho(maze, x+1, y, caminho) //move para baixo
    || encontrarCaminho(maze, x, y+1, caminho) //direita
    || encontrarCaminho(maze, x-1, y, caminho) //cima
    || encontrarCaminho(maze, x, y-1, caminho)) { //esquerda
        return true
    } 

    caminho.pop()
    return false
}

function somaSucessiva(a, b){
    if (b === 0) return a

    return somaSucessiva(++a, --b)
}

function multiplicaSucessiva(a, b, resultado = 0){
    if (b === 0) return resultado

    return multiplicaSucessiva(a, --b, resultado + a)
}

function calculaSequencia(n){
    if (n === 1) return 1
    if (n === 2) return 2

    return 2 * calculaSequencia(n-1) + 3 * calculaSequencia(n-2)
}

function combinacaoAlfabeto(n, combinacao = '', usadas = new Set(), resultado = []){
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    const letras = alfabeto.slice(0,n)

    if (combinacao.length === n){
        resultado.push(combinacao)
        return
    }

    for (let letra of letras){
        if (!usadas.has(letra)) {
            usadas.add(letra)
            combinacaoAlfabeto(n, combinacao+letra, usadas, resultado)
            usadas.delete(letra)
        }
    }

    return resultado
}

function combinacaoJogo(atual = [], inicio = 1, resultado = []){
    if (atual.length === 6) {
        resultado.push([...atual])
        return
    }

    for (let i=inicio; i<=60; i++){
        atual.push(i)
        combinacaoJogo(atual, i+1, resultado)
        atual.pop()
    }

    return resultado
}

function fibGeneralizada(f0, f1, n){
    if (n === 0) return f0
    if (n === 1) return f1

    return fibGeneralizada(f0, f1, n-1) + fibGeneralizada(f0, f1, n-2)
}

function somaCubos(n){
    if (n === 1) return 1

    return Math.pow(n,3) + somaCubos(n-1)
}

function somaDigitos(n){
    if (n === 0) return 0
    
    return n%10 + somaDigitos(Math.floor(n/10))
}

function mediaVetor(vetor, indice = 0){
    if (indice === vetor.length-1) return vetor[indice]

    let soma = vetor[indice] + mediaVetor(vetor, indice+1)

    if (indice === 0) return soma/vetor.length

    return soma
}

function somaElementosVetor(vetor, indice = 0){
    if (indice === vetor.length-1) return vetor[indice]

    return vetor[indice] + somaElementosVetor(vetor, indice+1)
}

function encontraMaiorElemento(vetor, indice=0){
    if (indice === vetor.length-1) return vetor[indice]

    let maior = encontraMaiorElemento(vetor, indice+1)

    return Math.max(vetor[indice], maior)
}

function naoNegativo(){
    let x = Number(prompt('Digite um número não negativo (negativo para parar): '))
    
    if (x < 0) return 'STOPPED'

    return naoNegativo(x)
}

function imprimeSerie(i, j, k=1){

    if (i > j) return ''

    let resto = imprimeSerie(i+k, j, k)

    return `${i} ${resto}`.trim()
}

function calculaSerieFracao(n){
    if (n === 1) return 1/1

    return (1/n) + calculaSerieFracao(n-1)
}

function serieN(n){
    if (n === 0) return 0
    if (n === 1) return 2/4

    return (Math.pow(n, 2)/(n+3)) + serieN(n-1)
}

function calculaProdutoVetor(vetor, indice = 0){
    if (indice === vetor.length-1) return vetor[indice]

    return vetor[indice] * calculaProdutoVetor(vetor, indice+1)
}

function enesimoTermo(n){
    if (n === 1) return 3

    return 3*enesimoTermo(n-1) - 2
}

function multiplosN(x,y, tabuada = []){
    if (y === 0) return tabuada

    tabuada.unshift(x*y)

    return multiplosN(x, y-1, tabuada)
}



let maze = [
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0]
]

let vetor = [4,2,1,5,3,1,6,1]
let alvo = 1

console.log(buscaElemento(vetor, alvo))