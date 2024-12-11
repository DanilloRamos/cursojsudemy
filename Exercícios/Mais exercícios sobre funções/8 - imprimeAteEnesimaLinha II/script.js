function imprimeAteN(n){
    for (let i=1;i<=n;i++){
        let linha = ''
        for (let j=1;j<=i;j++){
            linha += `${j} `
        }
        console.log(linha.trim())
    }
}

imprimeAteN(5)