function verificaPalindromo(palavra){
    let palindromo
    let inverso = palavra.split('').reverse().join('')

    if (inverso === palavra) {
        palindromo = true
    } else {
        palindromo = false
    }

    return palindromo
}

console.log(verificaPalindromo('arara'))
console.log(verificaPalindromo('gato'))