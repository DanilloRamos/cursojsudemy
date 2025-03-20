function gamble(rolls, myCoins, pot) {
    const dreidel = ['Hei','Shin', 'Gimel', 'Nun']

    if (!Array.isArray(rolls)) throw new Error ('rolls must be an array')
    if (typeof myCoins !== 'number' || typeof pot !== 'number') throw new Error ('myCoins and pot must be numbers')
    
    for (let i=0; i<rolls.length; i++) {
        if (rolls[i] === dreidel[0]) {
            const win = Math.floor(pot/2)
            myCoins += win
            pot -= win
        } else if (rolls[i] === dreidel[1]) {
            myCoins--
        }else if (rolls[i] === dreidel[2]) {
            myCoins += pot
            pot = 0
            break
        }
    }

    return myCoins
}