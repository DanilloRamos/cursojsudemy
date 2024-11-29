function converteStringEmJSON(string, prop){
    const obj = JSON.parse(string)
    return obj[prop]
}

const string = '{"nome":"Danillo","idade":"37"}'

console.log(converteStringEmJSON(string, "idade"))