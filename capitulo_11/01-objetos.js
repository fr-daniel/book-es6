
function Livro(nome) {
    this.nome = nome;
}

var livro = new Livro('ECMAScript 6');

console.log(livro);
console.log(typeof livro);
console.log( livro instanceof Livro);

var livro2 = {
    titulo: 'PHP'
};

//mesma referência
var outroLivro = livro2;
outroLivro.titulo = 'PHP7';
outroLivro.autor = 'Daniel'
outroLivro['editora'] = 'BrazilBooks';

console.log(livro2, outroLivro);