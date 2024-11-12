let pessoa  = {
    "nome":"Danillo",
    "idade": 37,
    "profissao":"Servidor Público",
    "hobbies":["Vídeo game","Programação","Academia"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)
console.log(pessoaJSON)