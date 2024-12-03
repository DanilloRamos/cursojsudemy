function validaInformacoes(nome,idade,salario,sexo,estadoCivil){
  if (nome.length>3 && (idade>=0 && idade<=150) && salario>0 && (sexo.toLowerCase()==='f'||sexo.toLowerCase()==='m') &&
(estadoCivil.toLowerCase()==='s'||estadoCivil.toLowerCase()==='c'||estadoCivil.toLowerCase()==='v'||estadoCivil.toLowerCase()==='d')){

  console.log('Informações validadas com sucesso!')

  }

  while(nome.length<3 && (idade<0 || idade>150) && salario <0 && (sexo.toLowerCase()!=='f' || sexo.toLowerCase()!=='m') &&
  (estadoCivil.toLowerCase()!=='s'||estadoCivil.toLowerCase()!=='c'||estadoCivil.toLowerCase()!=='v'||estadoCivil.toLowerCase()!=='d')) {
    console.log(`Informações inválidas. Favor informar novamente:\n`)
    nome = prompt('Informe um nome válido: ')
    idade = prompt('Informe uma idade válida: ')
    salario = prompt('Informe um salário válido: R$ ')
    sexo = prompt('Informe um sexo válido (M/F): ')
    estadoCivil = prompt('Informe um estado civil válido (S/C/V/D): ')

    if (nome.length>3 && (idade>=0 && idade<=150) && salario>0 && (sexo.toLowerCase()==='f'||sexo.toLowerCase()==='m') &&
(estadoCivil.toLowerCase()==='s'||estadoCivil.toLowerCase()==='c'||estadoCivil.toLowerCase()==='v'||estadoCivil.toLowerCase()==='d')){

  console.log('Informações validadas com sucesso!')
  break
  }
  }
}

console.log(`Preencha as informações abaixo:\n`)
let nome = prompt('Informe o seu nome: ')
let idade = prompt('Informe sua idade: ')
let salario = prompt('Informe seu salário: R$ ')
let sexo = prompt('Informe seu sexo (M/F): ')
let estadoCivil = prompt('Informe seu estado civil (S/C/V/D): ')

validaInformacoes(nome,idade,salario,sexo,estadoCivil)