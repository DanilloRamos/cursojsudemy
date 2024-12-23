let names = ['Ana','ana','John','john']
console.log(names.sort())

console.log(names.sort(
    (a,b) =>{
        if(a.toLowerCase() > b.toLowerCase()){
            return -1
        }
        
        if (a.toLowerCase() < b.toLowerCase()){
            return 1
        }

        return 0
    }
))

//todas as minúsculas primeiro - método localeCompare() - serve também para caracteres com acento
console.log(names.sort( (a,b) => a.localeCompare(b)))