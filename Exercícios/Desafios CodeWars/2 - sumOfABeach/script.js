function sumOfABeach(beach){
    
    let countWords = 0
    let targets = ['sand','water','fish','sun']
    const beachLowerCase = beach.toLowerCase()

    for (const word of targets){
        const regex = new RegExp(word.toLowerCase(), 'g')
        const matches = beachLowerCase.match(regex)

        if (matches){
            countWords += matches.length
        }
    }

    return countWords
}

console.log(sumOfABeach("WAtErSlIde"))
console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN"))
console.log(sumOfABeach("gOfIshsunesunFiSh"))
console.log(sumOfABeach("cItYTowNcARShoW"))