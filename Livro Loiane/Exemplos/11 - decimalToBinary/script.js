//instanciando a classe stack
import { Stack } from "./stack-object.js";

function decimalToBinary(decNumber){
    const remStack = new Stack()
    let number = decNumber
    let rem
    let binaryString = ''

    while(number>0){
        rem = Math.floor(number%2) //recebe a parte inteira dos restos da divisão por 2
        remStack.push(rem) //empilha os resultados
        number = Math.floor(number/2) //atualiza o número com a parte inteira da divisão por 2
    }

    while(!remStack.isEmpty()){
        binaryString += remStack.pop().toString() //desempilha os restos para formar o número binário
    }

    return binaryString
}

console.log(decimalToBinary(233))
console.log(decimalToBinary(10))
