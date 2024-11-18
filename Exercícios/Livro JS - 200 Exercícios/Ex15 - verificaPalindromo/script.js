function verificaPalindromo(palavra){
    let palavraReversa = palavra.split("").reverse().join("")

    if(palavra.toUpperCase()==palavraReversa.toUpperCase()){
        console.log(`A palavra ${palavra} é palíndromo`)
    } else {
        console.log(`A palavra ${palavra} não é palíndromo`)
    }
}

verificaPalindromo("Arara")
verificaPalindromo("Gato")