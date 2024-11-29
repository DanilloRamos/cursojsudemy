function informacoes (nome,idade,cidade = 'Não informado'){
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`
}

console.log(informacoes('Danillo', 37))
console.log(informacoes('José', 48, 'São Paulo'))