function matrizPersonalizada(linhas, colunas){
    let matriz = []
    let cont = 1

    for (let i=0;i<linhas;i++){
        let linha = []

        for (let j=0;j<colunas;j++){
            linha.push(cont)
            cont ++
        }

        matriz.push(linha)
    }

    matriz.forEach(linha=> console.log(linha))
}

let linhas = parseInt(prompt('Digite quantas linhas deverá ter a matriz: '))

while(isNaN(linhas)||!Number.isInteger(linhas)||linhas<=0){
    linhas = parseInt(prompt('Número inválido de linhas. Por favor, informe um número válido de linhas que deverá ter a matriz: '))
}

let colunas = parseInt(prompt('Digite quantas colunas deverá ter a matriz: '))

while(isNaN(colunas)||!Number.isInteger(colunas)||colunas<=0){
    colunas = parseInt(prompt('Número inválido de colunas. Por favor, informe um número válido de colunas que deverá ter a matriz: '))
}

console.log(`Matriz resultante ${linhas} x ${colunas}`)
matrizPersonalizada(linhas,colunas)