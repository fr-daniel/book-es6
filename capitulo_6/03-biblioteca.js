
var listNewBooks = [
    {
        nome: 'PHP', 
        estante: '12A'
    },
    {
        nome: 'Web',
        estante: '01B'
    },
    {
        nome: 'Dados abertos',
        estante: '02A'
    }
];

var acervo = new Map();

for(livro of listNewBooks) {
    acervo.set(livro.nome, livro.estante);
}

console.log(acervo.size);
console.log(acervo);

function getLocalizacaoBook(titulo) {
    var book = acervo.get(titulo);
    return book === undefined ? 'Livro não encontrado no acervo!' : book;
}

console.log(getLocalizacaoBook('Web'));
console.log(getLocalizacaoBook('HTML5'));