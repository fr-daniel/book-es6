const nomeMetodo = 'invocar';

const objeto = {
    [nomeMetodo](){
        console.log('executou método');
    }
};

objeto[nomeMetodo]();

const nomeFuncao = 'mostrar';
const propriedade = 'Nome';

const objeto2 = {
    Nome: 'Objeto2',
    [`${nomeFuncao}${propriedade}`](){
        console.log(this[propriedade]);
    }
};

objeto2.mostrarNome();

const apelido = 'apelido';

const pessoa = {
    nome: 'Daniel',
    [apelido]: 'Dan'
};

console.log(pessoa[apelido]);
