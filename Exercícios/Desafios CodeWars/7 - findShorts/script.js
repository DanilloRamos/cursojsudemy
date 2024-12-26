function findShort(s){
    const shorts = s.split(' ')
    let shortestLength = shorts[0].length

    for (let i=1;i<shorts.length;i++){
        const shortLength = shorts[i].length

        if (shortLength < shortestLength){
            shortestLength = shortLength
        }
    }

    return shortestLength
}

let string = "bitcoin take over the world maybe who knows perhaps"
console.log(findShort(string))