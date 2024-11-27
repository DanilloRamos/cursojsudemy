function elementoMaisFrequente (arr1){
    const frequencia = {}
    let cont = 0
    let maisFrequente

    for (let item of arr1){
        if (frequencia[item]){
            console.log(`Frequencia[item]: ${frequencia[item]}`)
            frequencia[item]++
            console.log('Caiu no IF')
            console.log(`Frequencia[item]: ${frequencia[item]}`)
        } else {
            frequencia[item]=1
            console.log('Caiu no ELSE')
            console.log(`Frequencia[item]: ${frequencia[item]}`)
        }

        if (frequencia[item]>cont){
        cont = frequencia[item]
        console.log('cont: '+cont)
        maisFrequente = item
        console.log('maisFrequente: '+maisFrequente)
    }
    }

   // console.log(maisFrequente)
    return maisFrequente
}

const nums = [1,2,3,2,4,3,5,2]
console.log(elementoMaisFrequente(nums))