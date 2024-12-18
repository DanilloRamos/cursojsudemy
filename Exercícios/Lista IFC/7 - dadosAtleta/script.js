function levantamentoAtletas (...dadosAtletas) {
    
    let maiorAltura = -Infinity
    let menorAltura = Infinity
    let inscricaoMaisAlto = 0
    let inscricaoMaisBaixo = 0

    for(let i=0; i<dadosAtletas.length; i++){
        if (dadosAtletas[i].altura>maiorAltura){
            maiorAltura = dadosAtletas[i].altura
            inscricaoMaisAlto = dadosAtletas[i].inscricao
        }
        if (dadosAtletas[i].altura<menorAltura){
            menorAltura = dadosAtletas[i].altura
            inscricaoMaisBaixo = dadosAtletas[i].inscricao
        }
    }

    console.log(`Maior altura: ${maiorAltura.toFixed(2)}, do atleta ${inscricaoMaisAlto}`)
    console.log(`Menor altura: ${menorAltura.toFixed(2)}, do atleta ${inscricaoMaisBaixo}`)    
}

function main(){
    
    let dadosAtletas = []

    while (true){

        let atleta = {}

        atleta.inscricao = parseInt(prompt('Informe o número de inscrição do atleta: '))

        if (atleta.inscricao===0){
            break
        }

        atleta.altura = parseFloat(prompt('Informe a altura do atleta: '))

        dadosAtletas.push(atleta)
    }

    levantamentoAtletas(...dadosAtletas)

}

main()