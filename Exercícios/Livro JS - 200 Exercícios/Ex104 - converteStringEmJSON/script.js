function converteStringEmJSON(string){
    return JSON.parse(string)
}

const string = '{"nome":"Danillo","idade":"37"}'

console.log(converteStringEmJSON(string))