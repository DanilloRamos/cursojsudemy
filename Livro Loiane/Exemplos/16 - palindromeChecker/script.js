import { Deque } from "./deque.js";

function palindromeChecker(aString) {
    if (aString === null || aString ===  undefined
        || aString !== null && aString.length === 0) { //verifica se a string é válida
            return false
        }

    const deque = new Deque()
    const lowerString = aString.toLocaleLowerCase().split(' ').join('')
    let isEqual = true
    let firstChar, lastChar

    for (let i=0; i<lowerString.length; i++){
        deque.addBack(lowerString.charAt(i)) //
    }

    while (deque.size()>1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        
        if (firstChar !== lastChar) isEqual = false
    }

    return isEqual
}

console.log('a',palindromeChecker('a'))
console.log('aa',palindromeChecker('aa'))
console.log('kayak', palindromeChecker('kayak'))
console.log('level',palindromeChecker('level'))
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'))
console.log('Step on no pets',palindromeChecker('Step on no pets'))