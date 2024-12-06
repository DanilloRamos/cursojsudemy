function temperatura(){
    
    let maiorTemperatura = Number.MIN_SAFE_INTEGER
    let menorTemperatura = Number.MAX_SAFE_INTEGER
    let somaTemperatura = 0
    let cont = 0

    while(true){
        
        let temp = prompt(`Informe a ${cont+1}ª Temperatura ou digite 'sair' para encerrar: `)

        

        if (!isNaN(temp)){
            let tempConv = parseFloat(temp)
            somaTemperatura+=tempConv
            cont++
            
            if(tempConv>maiorTemperatura){
                maiorTemperatura = tempConv
            }

            if (tempConv<menorTemperatura){
                menorTemperatura = tempConv
            }


        } else if (isNaN(temp) && temp.toLowerCase()==='sair'){
            console.log(`Maior temperatura: ${maiorTemperatura}C`)
            console.log(`Menor temperatura: ${menorTemperatura}C`)
            console.log(`Temperatura média: ${(somaTemperatura/cont).toFixed(2)}`)
            break
        }
    }
}

temperatura()
