let contaBancaria = {
    saldo:1000,

    saque:function(valor){
        if (valor<=this.saldo){
            this.saldo-=valor
        } else {
            console.log('Saldo insuficiente')
        }
        return this.saldo
    },

    deposito:function(valor){
        return this.saldo += valor
    },

    obterSaldo:function(){
        return this.saldo
    }
}

console.log(contaBancaria.obterSaldo())
console.log(contaBancaria.deposito(500))
console.log(contaBancaria.obterSaldo())
console.log(contaBancaria.saque(1500))
console.log(contaBancaria.saque(150))