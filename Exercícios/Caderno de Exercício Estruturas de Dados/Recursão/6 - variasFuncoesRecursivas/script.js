function zeraPares(n) {
    if (n === 0) return 0

    return zeraPares(Math.floor(n/10))*10 + ((n%10)%2 !== 0 ? n%10 : 0)
}

function zeraImpares(n){
    if (n === 0) return 0

    return zeraImpares(Math.floor(n/10))*10 + ((n%10)%2 !== 0 ? 0:n%10)
}

function removePares(n){
    if (n === 0) return 0

    return removePares(Math.floor(n/10))*((n%10)%2 !== 0 ? 10:1) + ((n%10)%2 !== 0 ? n%10 : 0)
}

function removeImpares(n){
    if (n === 0) return 0

    return removeImpares(Math.floor(n/10))*((n%10)%2 !== 0 ? 1:10) + ((n%10)%2 !== 0 ? 0 : n%10)
}

console.log(zeraPares(1234))
console.log(zeraImpares(1234))
console.log(removePares(1234))
console.log(removeImpares(1234))