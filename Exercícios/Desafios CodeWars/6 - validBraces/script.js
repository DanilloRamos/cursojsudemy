function validBraces(braces){
    
    const stack = []
    const matchingBraces = {')':'(',']':'[','}':'{'}

    for (const brace of braces){
        if (['[','(','{'].includes(brace)){
            stack.push(brace)
        } else if ([']',')','}'].includes(brace)){
            if (stack.pop()!==matchingBraces[brace]){
                return false
            }
        }
    }

    return stack.length===0
}

//console.log(validBraces('[]'))
console.log(validBraces('(({{[[]]}}))'))
console.log(validBraces("[(])"))