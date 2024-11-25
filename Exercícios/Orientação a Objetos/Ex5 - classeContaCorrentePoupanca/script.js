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

        if (valor>this.saldoContaPoupanca){
            console.log('Saldo insuficiente')
        } else {
            this.saldoContaPoupanca -= valor
        }
    }

    rendimentoPoupanca(periodo){
        return this.saldoPoupanca*((1+(this.jurosPoupanca/100)*periodo))
    }

    transferencia(valor){
        
    }
}

class ContaEspecial extends ContaBancaria{
    constructor(saldoContaCorrente,saldoPoupanca,jurosPoupanca){
        this.saldoContaCorrente = saldoContaCorrente
        this.saldoPoupanca = saldoPoupanca
        this.jurosPoupanca = jurosPoupanca
    }

    rendimentoPoupanca(periodo){
        return this.saldoPoupanca*(((1+(this.jurosPoupanca/100)*periodo))*2)
    }
}

let conta = new ContaBancaria(1000,2500,0.6)

console.log(`Saldo da Conta Corrente: R$ ${conta.saldoContaCorrente}`)
console.log(`Saldi da Conta Poupança: R$ ${conta.saldoContaPoupanca}`)
