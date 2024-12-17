function lacuna(string){
    
    let intervaloMaximo = 0
    let contB = 0
    let achouA = false

    for (let i=0; i<string.length; i++){
        if (string[i]==='a'||string[i]==='A'){
            if (achouA){
                intervaloMaximo = Math.max(intervaloMaximo,contB)
            }

            achouA = true //encontrou um A
            contB = 0
        } else if ((string[i]==='b'||string[i]==='B')&&achouA) {
            contB++
        }
    }

    return intervaloMaximo
}

let string = 'abbbabbbaa'
console.log(`Intervalo máximo encontrado: ${lacuna(string)}`)