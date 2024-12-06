function tabuadaPersonalizada(valor,inicio,final){
    
    console.log(`Montar a tabuada de: ${valor}`)

    while (true){
        if (inicio>final){
            alert('Valor de início é maior que o valor do final. Informe um valor de início que seja válido')
            let inicioValido = prompt('Digite um valor de início válido:')
            inicio = parseInt(inicioValido)
        } else {
            console.log(`Começar por: ${inicio}`)
            console.log(`Terminar em: ${final}\n\n`)
            console.log(`Vou montar a tabuada de ${valor} começando em ${inicio} e terminando em ${final}:`)
            for (let i=inicio;i<=final;i++){
                console.log(`${valor} X ${i} = ${valor*i}`)
            }
            break
        }
    }
}

tabuadaPersonalizada(5,4,7)