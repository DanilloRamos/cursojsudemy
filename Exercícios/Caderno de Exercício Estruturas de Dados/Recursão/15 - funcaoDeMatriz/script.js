function deMatriz(primeiro, tamanho){
    let vazia = true
    let diagonal = true
    let triangularSuperior = true
    let triangularInferior = true



    for (let i=0;i<tamanho;i++){
        for (let j=0;j<tamanho;j++){
            const matriz = primeiro[i][j]

            if (matriz !== 0) vazia = false
            if (i !== j && matriz !== 0) diagonal = false
            if (i>j && matriz !== 0) triangularSuperior = false
            if (i<j && matriz !== 0) triangularInferior = false
        }
    }

    if (vazia) return 'V'
    if (diagonal) return 'D'
    if (triangularSuperior) return 'S'
    if (triangularInferior) return 'I'
    return 'X'
}

let tamanho = parseInt(prompt('Digite o tamanho desejado da matriz nxn: '),10)

while(isNaN(tamanho) || tamanho<=0){
    tamanho = parseInt(prompt('Tamanho inválido. Digite o tamanho desejado da matriz nxn: '),10)
}

const matriz = []

for (let i=0;i<tamanho;i++){
    let linha = []
    for (let j=0;j<tamanho;j++){
        const num = parseInt(prompt(`Digite o elemento da ${i+1}ª linha e ${j+1}ª coluna da matriz: `))
        linha.push(num)
    }

    matriz.push(linha)
}

let primeiro = matriz

console.log(deMatriz(primeiro,tamanho))
console.table(matriz)
