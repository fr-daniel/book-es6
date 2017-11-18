function montaQuerySelect() {
    const tabela = arguments[0];
    const qtdArgs = arguments.length;
    let cols = '';
    if(qtdArgs > 1) {
        for(let index = 1; index < qtdArgs; index++) {
            cols += `${arguments[index]}, `;
        }
        cols = cols.substring(0, cols.length - 2);
    } else {
        cols = '*';
    }
    return `SELECT ${cols} FROM ${tabela}`;
}

function montaQuerySelect2() {
    const tabela = arguments[0];
    const qtdArgs = arguments.length;
    const colunas = Array.from(arguments).slice(1);
    let cols;
    if(qtdArgs > 1) {
        cols = colunas.reduce((acumulator, atual) => acumulator + ', ' + atual );
    } else {
        cols = '*';
    }
    return `SELECT ${cols} FROM ${tabela}`;
}

console.log(montaQuerySelect2('usuarios'));
console.log(montaQuerySelect2('usuarios', 'idade', 'sexo', 'nome', 'endereco'));
console.log(montaQuerySelect2('usuarios', 'nome'));

function soma(...valores) {
    return valores.reduce((acumulator, atual) => acumulator + atual, 0);
}

console.log(soma());
console.log(soma(1, 2, 3, 4));
console.log(soma(4));

function somaTudoEMultiplicaPor(multiplicador = 0, ...valores) {
    return valores.reduce((acumulator, atual) => acumulator + atual , 0) * multiplicador;
}

console.log(somaTudoEMultiplicaPor());
console.log(somaTudoEMultiplicaPor(2, 3, 4));
console.log(somaTudoEMultiplicaPor(5, 10, 3, 2));


function montaQuerySelect3(tabela, ...colunas) {
    let cols = colunas.length > 0 
        ? colunas.reduce((acumulator, atual) => `${acumulator}, ${atual}`) 
        : '*';
    return `SELECT ${cols} FROM ${tabela}`;
}

console.log(montaQuerySelect3('usuarios'));
console.log(montaQuerySelect3('usuarios', 'idade', 'sexo', 'nome', 'endereco'));
console.log(montaQuerySelect3('usuarios', 'nome'));

function montaQuerySelect4(tabela, ...colunas) {
    let cols = colunas.length > 0 ? colunas.join(', ') : '*';
    return `SELECT ${cols} FROM ${tabela}`;
}

console.log(montaQuerySelect4('usuarios'));
console.log(montaQuerySelect4('usuarios', 'idade', 'sexo', 'nome', 'endereco'));
console.log(montaQuerySelect4('usuarios', 'nome'));