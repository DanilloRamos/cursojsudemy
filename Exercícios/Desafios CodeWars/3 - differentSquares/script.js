function differentSquares(matrix){
    const rows = matrix.length //número de linhas
    const cols = matrix[0].length //número de colunas
    const squares = new Set() //armazena valores únicos

    for (let i=0; i<rows-1; i++){ //percorre as linhas
        for (let j=0; j<cols-1; j++){ //percorre as colunas

            const square = [ //extrai o quadrado 2x2
                matrix[i][j], matrix[i][j+1],
                matrix[i+1][j], matrix[i+1][j+1]
            ]

            const squareString = square.join(', ')//transforma o quadrado em string, para poder ser usado no Set

            squares.add(squareString)//adiciona o quadrado no Set
        }
    }

    return squares.size
}

let matrix = [[1, 2, 1],
[2, 2, 2],
[2, 2, 2],
[1, 2, 3],
[2, 2, 1]]

console.log(differentSquares(matrix))