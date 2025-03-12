function rot13(message){
    let result = ''
    for (let i=0; i<message.length; i++){
        const char = message[i]

        //desloca 13 posições no alfabeto para letras minúsculas
        if (/[a-z]/.test(char)){
            const newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + 13)%26)+97)
            result += newChar
        } else if (/[A-Z]/.test(char)){ //desloca 13 posições no alfabeto para letras maiúsculas
            const newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + 13)%26)+97)
            result += newChar.toUpperCase()
        } else {
            //mantém os caracteres que não são letras
            result += char
        }
    }

    return result
  }