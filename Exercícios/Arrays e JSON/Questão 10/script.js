let calculadora = {
    somar:function(num,num1){
        console.log(`${num} + ${num1} = ${num+num1}`)
    },
    multiplicar:function(num,num1){
        console.log(`${num} * ${num1} = ${num*num1}`)
    },
    subtrair:function(num,num1){
        console.log(`${num} - ${num1} = ${num-num1}`)
    },
    dividir:function(num,num1){
        console.log(`${num} / ${num1} = ${num/num1}`)
    }
}

let numero = 5
let numero1 = 20

calculadora.somar(numero,numero1)
calculadora.subtrair(numero,numero1)
calculadora.multiplicar(numero,numero1)
calculadora.dividir(numero,numero1)