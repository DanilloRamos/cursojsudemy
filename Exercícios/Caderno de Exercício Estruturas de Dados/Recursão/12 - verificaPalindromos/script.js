function ehPalindromo(string){
    
    let inversa = string.split('').reverse().join('')
    let palindromo = false

    if (string.toLowerCase() === inversa.toLowerCase()){
        palindromo = true
    }

    return palindromo
}


console.log(ehPalindromo('Arara'))
console.log(ehPalindromo('Aroma'))
console.log(ehPalindromo('Anilina'))