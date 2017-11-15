//Dados como valor padrão
function nomeCompleto(nome, sobreNome, nomeDoMeio = "") {
    console.log(`${nome} ${nomeDoMeio} ${sobreNome}`);
}

nomeCompleto('Daniel', 'Silva', 'L.');
nomeCompleto('Daniel', 'L.');

//Parâmetro como valor padrão
function calculaPotencia(x = 2, y = x) {
    console.log( Math.pow(x, y) );
}

calculaPotencia();
calculaPotencia(3);
calculaPotencia(3,2);

//Funções como valor padrão
function facaAlgoComMeuNome(nome, callback = nome => console.log(nome.toUpperCase()) ) {
    callback(nome);
}

facaAlgoComMeuNome('Daniel');
facaAlgoComMeuNome('Daniel', nome => console.log(nome.toLowerCase()));

//Parâmetro obrigatório

function parametroObrigatorio(parametro) {
    throw new Error(`O parâmetro ${parametro} é obrigatório!`);
}

function insiraObjetoNaTela(objeto = parametroObrigatorio('objeto')) {
    console.log( objeto );
}

insiraObjetoNaTela('Olá');
insiraObjetoNaTela();