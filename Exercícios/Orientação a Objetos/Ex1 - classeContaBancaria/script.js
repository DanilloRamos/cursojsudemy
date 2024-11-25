function ContaBancaria(){
    this.saldo = 1000

    this.deposito = function(valor){
        return this.saldo+=valor
    }

    this.saque = function(valor){
        if (valor>this.saldo){
            console.log('Saldo insuficiente')
        } else {
            return this.saldo-=valor
        }
    }

    return this.saldo
}

let contaCorrente = new ContaBancaria()
console.log(`Conta criada com sucesso: ${contaCorrente}`)
console.log(`Saldo inicial: R$ ${contaCorrente.saldo}`)
contaCorrente.deposito(500)
console.log(`Saldo atualizado: R$ ${contaCorrente.saldo}`)
contaCorrente.saque(1300)
console.log(`Saldo atualizado: R$ ${contaCorrente.saldo}`)
contaCorrente.saque(350)