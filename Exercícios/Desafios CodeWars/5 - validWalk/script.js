function isValidWalk(walk){

    if (walk.length!==10){
        return false
    }

    let northSouth = 0
    let eastWestern = 0

    for (const step of walk){
        if (step === 'n') northSouth++
        if (step === 's') northSouth--
        if (step === 'w') eastWestern++
        if (step === 'e') eastWestern--
    }

    return northSouth === 0 && eastWestern === 0
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w'])); // false
console.log(isValidWalk(['n', 'n', 'n', 's', 's', 's', 'e', 'e', 'w', 'w'])); // true