function sequencias(a, b){

    let soma = a + b
    let seqA = String(a).split('').map(Number)
    let seqB = String(b).split('').map(Number)
    let seqC = String(soma).split('').map(Number)

    let sequenciaA = new Array(8).fill(-1)
    let sequenciaB = new Array(8).fill(-1)
    let sequenciaC = new Array(8).fill(-1)
    
    sequenciaA.splice(0, seqA.length, ...seqA)
    sequenciaB.splice(0, seqB.length, ...seqB)
    sequenciaC.splice(0,seqC.length,...seqC)

    console.log(`A = ${sequenciaA.join('|')}`)
    console.log(`B = ${sequenciaB.join('|')}`)
    console.log(`C = ${sequenciaC.join('|')}`)
}

sequencias(123,6789)