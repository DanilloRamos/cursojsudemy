let onibus = {
    rodas:8,
    passageiros:40,
    portas:2
}

delete onibus.rodas
onibus.janelas = 20

console.log("Novas propriedades do objeto ônibus")
console.log(`Rodas: xxxxxxx`)
console.log(`Limite de passageiros: ${onibus.passageiros}`)
console.log(`Portas: ${onibus.portas}`)
console.log(`Janelas: ${onibus.janelas}`)
