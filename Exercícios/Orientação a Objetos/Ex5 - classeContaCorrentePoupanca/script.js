class ContaBancaria {
    constructor(saldoContaCorrente,saldoPoupanca,jurosPoupanca){
        this.saldoContaCorrente = saldoContaCorrente
        this.saldoPoupanca = saldoPoupanca
        this.jurosPoupanca = jurosPoupanca
    }

    depositoContaCorrente(valor){
        this.saldoContaCorrente += valor
    }

    depositoContaPoupanca(valor){
        this.saldoPoupanca += valor
    }

    saqueContaCorrente(valor){

        if (valor>this.saldoContaCorrente){
            console.log('Saldo insuficiente')
        } else {
            this.saldoContaCorrente -= valor
        }
    }

    saqueContaPoupanca(valor){

        if (valor>this.saldoPoupanca){
            console.log('Saldo insuficiente')
        } else {
            this.saldoPoupanca -= valor
        }
    }

    rendimentoPoupanca(){
        let juros = (this.saldoPoupanca*this.jurosPoupanca)/100
        this.saldoPoupanca += juros
    }

    transferenciaCP(valor){
        this.saldoContaCorrente -= valor
        this.saldoPoupanca += valor                       
    }

    transferenciaCC(valor){
        this.saldoContaCorrente += valor
        this.saldoPoupanca -= valor                       
    }
}

class ContaEspecial extends ContaBancaria{
    constructor(saldoContaCorrente,saldoPoupanca,jurosPoupanca){
       super(saldoContaCorrente,saldoPoupanca,jurosPoupanca)
       this.jurosPoupanca*=2
    }

    rendimentoPoupancaEspecial(){
        let juros = (this.saldoPoupanca*this.jurosPoupanca)/100
        this.saldoPoupanca += (juros*2)
    }
}

let conta = new ContaBancaria(1000,2500,0.6)

console.log(`Saldo da Conta Corrente: R$ ${conta.saldoContaCorrente}`)
console.log(`Saldo da Conta Poupança: R$ ${conta.saldoPoupanca}`)

conta.depositoContaCorrente(500)
conta.depositoContaPoupanca(250)

console.log(`Saldo da Conta Corrente: R$ ${conta.saldoContaCorrente}`)
console.log(`Saldo da Conta Poupança: R$ ${conta.saldoPoupanca}`)

conta.transferenciaCC(300)
conta.transferenciaCP(450)

console.log(`Saldo da Conta Corrente: R$ ${conta.saldoContaCorrente}`)
console.log(`Saldo da Conta Poupança: R$ ${conta.saldoPoupanca}`)

conta.saqueContaCorrente(700)
conta.saqueContaPoupanca(825)
conta.rendimentoPoupanca(3)

console.log(`Saldo da Conta Corrente: R$ ${conta.saldoContaCorrente}`)
console.log(`Saldo da Conta Poupança: R$ ${conta.saldoPoupanca}`)

let contaEspecial = new ContaEspecial(3000,5500,1.2)


console.log(`Saldo da Conta Corrente Especial: R$ ${contaEspecial.saldoContaCorrente}`)
console.log(`Saldo da Conta Poupança Especial: R$ ${contaEspecial.saldoPoupanca}`)

contaEspecial.depositoContaCorrente(500)
contaEspecial.depositoContaPoupanca(250)

console.log(`Saldo da Conta Corrente Especial: R$ ${contaEspecial.saldoContaCorrente}`)
console.log(`Saldo da Conta Poupança Especial: R$ ${contaEspecial.saldoPoupanca}`)

contaEspecial.saqueContaCorrente(700)
contaEspecial.saqueContaPoupanca(825)
contaEspecial.rendimentoPoupanca(3)

console.log(`Saldo da Conta Corrente Especial: R$ ${contaEspecial.saldoContaCorrente}`)
console.log(`Saldo da Conta Poupança Especial: R$ ${contaEspecial.saldoPoupanca}`)

contaEspecial.transferenciaCC(300)
contaEspecial.transferenciaCP(450)

console.log(`Saldo da Conta Corrente: R$ ${conta.saldoContaCorrente}`)
console.log(`Saldo da Conta Poupança: R$ ${conta.saldoPoupanca}`)