function carro(modelo, marca = "Não especificado", ano=new Date().getFullYear()){
    return {marca, modelo, ano}
}

console.log(carro("Civic"))
console.log(carro("Creta", "Hiunday",2024))