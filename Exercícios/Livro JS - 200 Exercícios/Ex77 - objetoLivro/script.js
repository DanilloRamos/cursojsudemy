let livro = {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    numeroDePaginas:310,

    descricao:function(){
        console.log(`O livro ${this.titulo}, escrito por ${this.autor}, possui ${this.numeroDePaginas} páginas`)
    }
}

livro.descricao()