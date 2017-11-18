const Usuario = {
    nome: 'Daniel',
    sobrenome: 'Lima',
    senha: '21d901',
    email: 'fr.daniel.lima@gmail.com',
    profissao: 'A. S.',
    github: 'http://github.com/fr-daniel'
};

//const email = Usuario.email;
//validarEmail(email);

const {email} = Usuario;
console.log(email);

const {nome, sobrenome: apelido} = Usuario;
console.log(nome, apelido);

const {senha, confirmacaoSenha} = Usuario;
console.log(senha, confirmacaoSenha);

const suco = {
    sabor: 'uva',
    quantidade: '500ml'
};

const doce = {
    tipo: 'açucar'
};

function descreveSuco({sabor, quantidade}, {tipo}) {
    console.log(`Este suco é de sabor ${sabor} e possui ${quantidade} adocicado com ${tipo}.`);
}

descreveSuco(suco, doce);

//const {temperatura, maxima, minima} = recuperarDadosAPI();

const [cor1,,,,cor5] = ['azul', 'branco', 'verde', 'laranja', 'vermelho'];

console.log(cor1, cor5);

const contatos = [
    {
        nome: 'Daniel',
        numero: '9922-3154'
    },
    {
        nome: 'José',
        numero: '3931-2109'
    },
    {
        nome: 'Maria',
        numero: '2394-5311'
    }
];

const [,contato2] = contatos;

function getNumero({numero}) {
    return numero;
}

console.log(getNumero(contato2));

const [,{nome: nomeContato}] = contatos;

console.log(nomeContato);

const rotas = {
    rapidas: ['Rodovia', 'Estrada X', 'Estrada Y']
};

const {rapidas:[rapida,,rapida3]} = rotas;

console.log(rapida,rapida3)