const objeto = {
    valor: 10,
    [Symbol('simbolo')]: 'Oi! Sou um símbolo.'
};

console.log(objeto.valor);
console.log(objeto.simbolo);

const primos = [2, 3, 7];
const primosInterator = primos[Symbol.iterator]();

console.log(primosInterator.next());
console.log(primosInterator.next());
console.log(primosInterator.next());
console.log(primosInterator.next());

const equipe = {
    quantidade: 3,
    maturidade: 'alta',
    senior: 'José',
    pleno: 'Maria',
    junior: 'Daniel',
    [Symbol.iterator]: function* () {
        yield this.senior;
        yield this.pleno;
        yield this.junior;
    }
};

for(let membro of equipe) {
    console.log(membro);
}

const timeDesenvolvimento = {
    quantidade: 3,
    senior: 'José',
    pleno: 'Maria',
    junior: 'Daniel',
    [Symbol.iterator]: function* () {
        yield this.senior;
        yield this.pleno;
        yield this.junior;
    }
};

const timeNegocios = {
    quantidade: 2,
    diretor: 'Marcelo',
    vice: 'Guilherme',
    [Symbol.iterator]: function* () {
        yield this.diretor;
        yield this.vice;
    }
};

const equipeProjeto = {
    timeDesenvolvimento,
    timeNegocios,
    [Symbol.iterator]: function* () {
        yield* timeDesenvolvimento;
        yield* timeNegocios;
    }
};

for(let integrante of equipeProjeto) {
    console.log(integrante);
}

console.log(equipeProjeto);
