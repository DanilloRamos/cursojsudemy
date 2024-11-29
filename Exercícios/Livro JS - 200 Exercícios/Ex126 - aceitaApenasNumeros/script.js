function apenasNumeros (...args){
    return args.filter(item=>typeof item ==='number')
}

console.log(apenasNumeros(1,'a',2,'b',3,'c'))