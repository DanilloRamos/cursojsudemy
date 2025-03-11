function firstNonRepeatingLetter(s) {
    const separated = Array.from(s.toUpperCase())

    if (separated.length === 1) return s

    for (let i=0; i<separated.length; i++){
        const letter = separated[i]
        let cont = 0
        for (let j=0; j<separated.length; j++){
            if (letter === separated[j]) {
                cont++
            }
        }

        if (cont === 1){
            return Array.from(s)[i]
        }
    }

    return ""
}