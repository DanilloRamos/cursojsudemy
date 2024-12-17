function calculaConsumoMedio(distancia, combustivelGasto){
    return distancia/combustivelGasto
}

let distancia = parseFloat(prompt('Informe a distância percorrida: '))
let combustivelGasto = parseFloat(prompt('Informe quantos litros de combustível foram gastos: '))

while (isNaN(distancia) || isNaN(combustivelGasto) || distancia<=0 || combustivelGasto <=0){
    if (isNaN(distancia) || distancia<=0){
        distancia = parseFloat(prompt('Valor da distância inválido. Por favor, informe um valor válido para a distância percorrida: '))
    } else if (isNaN(combustivelGasto)|| combustivelGasto<=0){
        combustivelGasto = parseFloat(prompt('Valor do combustível inválido. Por favor, informe um valor válido para o combistível consumido: '))
    }
}

console.log(`Consumo médio de combustível: ${calculaConsumoMedio(distancia,combustivelGasto).toFixed(2)} km/l`)