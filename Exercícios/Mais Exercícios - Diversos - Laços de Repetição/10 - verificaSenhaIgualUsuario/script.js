function verificaSenha(usuario, senha){
  
  if (usuario!==senha){
    console.log('Senha cadastrada com sucesso!')
  }
  
  while (usuario===senha){
    senha = prompt('A senha não pode ser igual ao nome de usuário. Por favor, informe uma senha diferente: ')

    if (usuario!==senha){
      console.log('Senha cadastrada com sucesso!')
      break
    }
  }
}

let usuario = 'chico123'
let senha = 'chico123'

verificaSenha(usuario,senha)