let nomes = ["João", "Danillo", "José", "Maria","Francisco"]

if (nomes.includes("Danillo")){
    console.log("Olá Danillo! "+`Seu nome ocupa a posição ${nomes.indexOf("Danillo")} no array`)
} else {
    console.log("Seu nome não está no array")
}
