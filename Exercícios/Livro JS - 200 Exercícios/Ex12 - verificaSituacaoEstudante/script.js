function verificaSituacaoFinal(mediaFinal){
    if(mediaFinal<7){
        console.log(`Sua média final é ${mediaFinal}. Você está reprovado`)
    } else {
        console.log(`Sua média é ${mediaFinal}. Parabéns, você está aprovado`)
    }
}

verificaSituacaoFinal(7.5)
verificaSituacaoFinal(5)