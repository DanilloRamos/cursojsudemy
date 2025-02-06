import ListaEncadeada  from './lista-encadeada.js'


function ehPalindromo(lista){
    
    let invertido = lista.inverteLista()
    let palavra = lista.transformaEmPilha()
    let palindromo

    if (palavra === invertido){
        palindromo = true
    } else {
        palindromo = false
    }

    return palindromo
}



