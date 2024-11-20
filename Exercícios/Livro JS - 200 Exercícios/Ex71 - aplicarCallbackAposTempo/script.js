function executarAposTempo(callback, duracao){
  setTimeout(callback, duracao)
}

let callback = () => console.log("Executado")

executarAposTempo(callback,2000)

