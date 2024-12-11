function converteNotacaoHora(horas, minutos){
    
    let periodo = 'A'

    if (horas>=12){
        periodo = 'P'

        if (horas>12){
            horas -= 12
        }
    }

    if (horas === 0){
        horas = 12
    }

    return {horas, minutos, periodo}
}

function exibeHora(horas, minutos, periodo){
    const sufixo = periodo === 'A'?'A.M.':'P.M.'
    console.log(`Hora convertida: ${horas}:${minutos.toString().padStart(2,'0')} ${sufixo}`)
}

function main(){
    let repetir = true

    while(repetir){
        const horas = parseInt(prompt('Digite as horas no formato 24h (0-23):'))
        const minutos = parseInt(prompt('Digite os minutos (0-59):'))

        if (isNaN(horas) || isNaN(minutos) ||
    horas < 0 || horas > 23 ||
    minutos<0 || minutos>59) {
        console.error('Entrada inválida. Tente novamente.')
        continue
    }

    const {horas: horasConvertidas, minutos: minutosConvertidos, periodo} = converteNotacaoHora(horas, minutos)
    exibeHora(horasConvertidas, minutosConvertidos, periodo)

    repetir = confirm('Deseja converter outro horário?')
    }

    console.log('Programa encerrado')
}

main()