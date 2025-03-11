function cakes(recipe, available) {

    let max = Infinity

    for (let key in recipe){
        if (!available.hasOwnProperty(key)) return 0

        const quantidadeReceita = recipe[key]
        const quantidadeDisponivel = available[key]
        const bolos = Math.floor(quantidadeDisponivel/quantidadeReceita)

        max = Math.min(max, bolos)
    }
    
    return max
  }
