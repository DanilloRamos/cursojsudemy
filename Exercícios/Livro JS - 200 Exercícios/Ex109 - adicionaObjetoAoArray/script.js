function converterEAdicionarAoStringEmJSON(string, novoObj){
    const array = JSON.parse(string)
    array.push(novoObj)
    return array
}

const dados = '[{"nome":"Danillo","idade":37},{"nome":"Maria","idade":25}]'
console.log(converterEAdicionarAoStringEmJSON(dados,{nome:"João",idade:22}))