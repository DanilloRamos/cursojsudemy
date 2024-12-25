function rgb(r, g, b) {
    const digits = '0123456789ABCDEF'

    function clamp(value){
        return Math.min(255, Math.max(0, value))
    }
        
    function toHex(value){
            let high = Math.floor(value/16) //parte alta do hexadecimal
            let low = value % 16 //parte baixa do hexadecimal
            return digits[high] + digits[low]
        }

    let redHex = toHex(clamp(r))
    let greenHex = toHex(clamp(g))
    let blueHex = toHex(clamp(b))


    return redHex + greenHex + blueHex
}

console.log(rgb(0,0,0))
console.log(rgb(0,0,-20))