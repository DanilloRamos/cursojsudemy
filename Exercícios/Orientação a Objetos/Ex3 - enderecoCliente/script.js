class EnderecoCliente {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua,
        this.bairro = bairro,
        this.cidade = cidade,
        this.estado = estado
    }

    get getRua(){
        return this.rua
    }

    atualizaRua(novaRua) {
        return this.rua = novaRua
    }

    get getBairro(){
        return this.bairro
    }

    atualizaBairro(novoBairro){
        return this.bairro = novoBairro
    }

    get getCidade(){
        return this.cidade
    }

   atualizaCidade(novaCidade){
    return this.cidade = novaCidade
   }

    get getEstado(){
        return this.estado
    }

    atualizaEstado(novoEstado){
        return this.estado = novoEstado
    }

    exibeEndereco(){
        console.log(`Rua: ${this.rua} \nBairro: ${this.bairro} \nCidade: ${this.cidade} \nEstado: ${this.estado}`)
    }
}

let cliente1 = new EnderecoCliente('Rua Cinco','Libório','Lagarto','Sergipe')

cliente1.exibeEndereco()
cliente1.atualizaRua('Rua Dez')

cliente1.exibeEndereco()

cliente1.atualizaBairro('Coroa do Meio')

cliente1.exibeEndereco()

cliente1.atualizaCidade('Aracaju')

cliente1.exibeEndereco()

cliente1.atualizaEstado('Pernambuco')

cliente1.exibeEndereco()