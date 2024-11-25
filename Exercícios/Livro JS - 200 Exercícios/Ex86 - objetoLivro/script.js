let livro = {
    titulo:'O Hobbit',
    autor:'J.R.R. Tolken',
    numeroDePaginas:310,

    descricaoLivro:function(){
        console.log(`Título: ${this.titulo} \nAutor: ${this.autor} \nPáginas: ${this.numeroDePaginas}`)
    }
}

livro.descricaoLivro()