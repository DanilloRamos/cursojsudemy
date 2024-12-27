function criptografaMensagem(mensagem){
    while (mensagem.length > 100){
        console.log('Mensagem muito longa. Reduza a mensagem.')
    }

    let mensagemCriptografada = Array.from(mensagem).map(char => {
        if (/[a-zA-Z]/.test(char)){
            let base = char >= 'a' && char <= 'z' ? 'a'.charCodeAt(0):'A'.charCodeAt(0)
            return String.fromCharCode((char.charCodeAt(0) - base + 1) % 26 + base)
        } else {
            return char
        }
}).join('')

    return mensagemCriptografada
}

let mensagem = 'O rato roeu a roupa do Rei de Roma'
console.log(criptografaMensagem(mensagem))