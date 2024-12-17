function diasMesesAnos(dias){
    
    const ANO_EM_DIAS = 365
    const MES_EM_DIAS = 30

    const anos = Math.floor(dias/ANO_EM_DIAS)
    const restoDiasAno = dias % ANO_EM_DIAS
    const meses = Math.floor(restoDiasAno/MES_EM_DIAS)
    const diasRestantes = restoDiasAno%MES_EM_DIAS

    console.log(`Sua idade equivale a ${anos} anos, ${meses} meses e ${diasRestantes} dias`)
}

let dias = parseInt(prompt('Digite sua idade em dias: '))

while (isNaN(dias) || dias<=0){
    dias = parseInt(prompt('Valor inválido. Por favor, digite um valor válido para sua idade em dias: '))
}

diasMesesAnos(dias)