function inArray(array1,array2){

    let matches = []

    for(let i=0; i<array2.length; i++){
        const subString = array1 [i] 
        
        for (let j=0; j<array2.length; j++){
            const mainString = array2[j]

            if (mainString.includes(subString)){
                matches.push(subString)
                break
            }
        }
    }

    return array1.filter((item)=>matches.includes(item))
}

let a1 = ["arp", "live", "strong"]
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

console.log(inArray(a1,a2))