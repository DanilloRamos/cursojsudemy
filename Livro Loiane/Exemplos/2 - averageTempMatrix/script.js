function printMatrix(myMatrix){
    for (let i=0; i>myMatrix.length; i++){
        for (let j=0; j<myMatrix[i].length; j++){
            console.log(myMatrix[i][j])
        }
    }
}


let averageTemperature = []

averageTemperature[0] = [72,75,79,79,81,81]
averageTemperature[1] = [81,79,75,75,73,73]

printMatrix(averageTemperature)
console.table(averageTemperature)