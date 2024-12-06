function ePrimo(num){
    
    let primo = true
    let divisores = []

    for (let i=2; i<num;i++){
        if (num%i===0){
            primo = false
            divisores.push(i)
        }
    }

    if (primo){
        console.log(`${num} é primo`)
    } else {
        console.log(`${num} não é primo. Seus divisores são: ${divisores.join(",")}`)
    }
}

ePrimo(125)
ePrimo(123)