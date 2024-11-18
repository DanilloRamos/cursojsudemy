function verificaSituacao(nota1,nota2){
    let media = (nota1+nota2)/2

    if (media>=7){
        console.log(`Sua média foi ${media}. Parabéns, você foi aprovado.`)
    } else {
        console.log(`Sua média foi ${media}. Você está reprovado`)
    }
}

verificaSituacao(7, 8.8)
verificaSituacao(2,3.5)