function calculaTribonacci(termo){
    if (termo === 0){
        return 0
    }

    if (termo === 1){
        return 0
    }

    if (termo === 2){
        return 1
    }

    return calculaTribonacci(termo-1)+calculaTribonacci(termo-2)+calculaTribonacci(termo-3)
}

console.log(calculaTribonacci(10))