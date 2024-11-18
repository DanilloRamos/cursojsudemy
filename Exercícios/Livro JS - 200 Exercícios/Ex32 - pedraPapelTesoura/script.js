function pedraPapelTesoura(escolhaUsuario){
    let resultado
    let escolhaComputador
    let aleatorio

    do {
        aleatorio = Math.floor(Math.random()*3)

        switch (aleatorio){
            case 0:
                escolhaComputador = "Pedra".toLowerCase()
                break
            case 1:
                escolhaComputador = "Papel".toLowerCase()
                break
            default:
                escolhaComputador = "Tesoura".toLowerCase()
                break
        }

        if ((escolhaUsuario.toLowerCase()=="Pedra".toLowerCase() && escolhaComputador.toLowerCase()=="Tesoura".toLowerCase()) || 
        (escolhaUsuario.toLowerCase()=="Tesoura".toLowerCase() && escolhaComputador.toLowerCase()=="Papel".toLowerCase()) ||
        (escolhaUsuario.toLowerCase()=="Papel".toLowerCase() && escolhaComputador.toLowerCase()=="Pedra".toLowerCase())){
            resultado = "Usuário ganhou!"
        } else if (escolhaUsuario.toLowerCase() == escolhaComputador.toLowerCase()){
           resultado = "Empate"
        } else {
            resultado = "Computador ganhou!"
        }
    } while(resultado=="Empate")

        console.log(`Sua escolha: ${escolhaUsuario}`)
        console.log(`Escolha do computador: ${escolhaComputador}`)
        console.log(resultado)
        
}

let escolha = prompt("Digite a sua escolha (Pedra, papel ou tesoura): ");

pedraPapelTesoura(escolha.toLowerCase())