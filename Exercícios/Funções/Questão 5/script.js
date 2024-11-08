function autoEscola(idade){
    let podeEntrar
    if (idade>=18){
        podeEntrar = true
    } else {
        podeEntrar = false
    }

    if (podeEntrar){
        console.log("Você tem mais de 18 anos. Pode entrar na auto escola")
    } else {
        console.log("Você tem menos de 18 anos. Não pode entrar na auto escola")
    }
}

autoEscola(37)
autoEscola(15)