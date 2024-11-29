function combinaObjetosSpread(obj1,obj2){
    return {...obj1,...obj2}
}

const obj1 = {
    nome:"Danillo"
}

const obj2 = {
    idade: 37
}

console.log(combinaObjetosSpread(obj1,obj2))