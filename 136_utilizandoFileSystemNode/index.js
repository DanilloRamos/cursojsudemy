let {readFile, writeFile} = require ('fs')

readFile("arquivo.txt", "utf-8", (error, text) => {
    if (error){
        throw error
    } else {
        console.log(text)
    }
})

writeFile("arquivo.txt", "texto por writeFile", (error) => {
    if (error){
        console.log(error)
    } else {
        console.log("Escreveu no arquivo")
    }
})

