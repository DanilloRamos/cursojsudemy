function ordenaArrayString(nomes){
    return nomes.sort((a,b)=>b.length-a.length)
}

const nomes = ['Danillo','João','Maria','Creuza']
console.log(ordenaArrayString(nomes))