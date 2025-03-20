function newAvg(arr, newavg) {

    function sumArray(arr) {
        return arr.reduce((sum, value) => sum + value, 0)
    }
    
    const somaAtual = sumArray(arr)
    const totalNecessario = newavg * (arr.length + 1)
    const novaDoacao = totalNecessario - somaAtual

    if (novaDoacao <= 0) throw new Error ('Expected New Average is too low')

    return Math.ceil(novaDoacao)
}
