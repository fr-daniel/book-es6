const argumentos = [1, 2, 3, 4];
console.log.apply(console, argumentos);
console.log(...argumentos);

const listaMae = ['leite', 'ovos', 'papel'];
const listaNamorada = ['arroz', 'feijao', 'suco'];
const listaEscritorio = ['adesivos', 'canetas', 'fita'];

//const listaCompras = listaMae.concat(listaNamorada);
const listaCompras = [...listaMae, ...listaEscritorio, ...listaNamorada];


console.log(listaCompras);

const produtoSelecionado = {
    descricao: 'Blusa de lã',
    preco: 'R$ 59,60'
};

const carrinho = [
    {descricao: 'Bota de cano médio', preco: 'R$ 199,90'},
    {descricao: 'Saia colorida', preco: 'R$ 29,90'},
    {descricao: 'Vestido longo', preco: 'R$ 399,90'}
];

const carrinhoAtualizado = [...carrinho, produtoSelecionado];

console.log(carrinhoAtualizado);

function soma(a, b) {
    console.log(a + b);
}

soma(1, 3);

var numeros = [3, 3];
soma(...numeros);


function contaQuantidadeDeVogaisNaoAcentuadas(palavra) {
    let qtdVogais = 0;
    let letras = [...palavra];
    for(let letra of letras) {
        if('aeiou'.indexOf(letra) !== -1) {
            qtdVogais++;
        }
    }
    return qtdVogais;
}

function contaQuantidadeDeVogaisNaoAcentuadas2(palavra) {
    return [...palavra.toLowerCase()].filter((letra) => 'aeiou'.includes(letra)).length;
}

function contaQuantidadeDeVogaisNaoAcentuadas3(...palavras) {
    let qtdVogais = 0;
    palavras.forEach((palavra) => {
        qtdVogais += [...palavra.toLowerCase()].filter((letra) => 'aeiou'.includes(letra)).length;
    });
    return qtdVogais;
}

console.log(contaQuantidadeDeVogaisNaoAcentuadas('daniel'));
console.log(contaQuantidadeDeVogaisNaoAcentuadas2('dAniel'));
console.log(contaQuantidadeDeVogaisNaoAcentuadas3('dAniel', 'lima', 'da', 'silvA'));


