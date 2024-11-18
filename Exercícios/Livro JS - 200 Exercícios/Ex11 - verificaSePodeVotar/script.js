function podeVotar(idade){
    if (idade<16){
        console.log(`Sua idade é ${idade}. Você ainda não pode votar`)
    } else if (idade>=16 && idade<18 || idade>=70){
        console.log(`Sua idade é ${idade}. Seu voto é facultativo`)
    } else {
        console.log(`Sua idade é ${idade}. Seu voto é obrigatório`)
    }
}
podeVotar(75)
podeVotar(15)
podeVotar(25)