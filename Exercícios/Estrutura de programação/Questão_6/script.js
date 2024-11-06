let idade = 25
let cnh = true

if (idade>=18 && cnh){
    console.log("O usuário pode dirigir")
} else if (idade>=18 && !cnh){
    console.log("O usuário não pode dirigir por não ter CNH")
} else {
    console.log("O usuário não possui a idade mínima pra ter CNH")
}