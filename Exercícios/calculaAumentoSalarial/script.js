function calculaAumento(salario){
     
     let percentual
     let novoSalario
     let valorAumento

     if (salario<=280){
          percentual = 0.2
          novoSalario = salario*(percentual+1)
          valorAumento = salario*percentual
     } else if (salario>280 && salario<700){
          percentual = 0.15
          novoSalario = salario*(percentual+1)
          valorAumento = salario*percentual          
     }else if (salario>=700 && salario<1500){
          percentual = 0.1
          novoSalario = salario*(percentual+1)
          valorAumento = salario*percentual
     } else {
          percentual = 0.05
          novoSalario = salario*(percentual+1)
          valorAumento = salario*percentual
     }

     exibeResultados(salario,percentual,novoSalario,valorAumento)
}

function exibeResultados(salario,percentual,novoSalario,valorAumento){
     console.log(`Salário antes do reajuste: R$ ${salario.toFixed(2)}`)
     console.log(`Percentual de aumento aplicado: ${percentual*100}%`)
     console.log(`Valor do aumento: R$ ${valorAumento.toFixed(2)}`)
     console.log(`Novo salário após aumento: R$ ${novoSalario.toFixed(2)}`)
}

function main(){
     let salario = parseFloat(prompt('Digite o salário atual: '))

     while (isNaN(salario) || salario<=0) {
          salario = parseFloat(prompt('Salário inválido. Informe um salário válido: '))          
     }

     calculaAumento(salario)
}

main()