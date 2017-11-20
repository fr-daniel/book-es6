
function* percorrerLinha477() {
    console.log('Passei pela linha 1.');
    yield 'Parada 1';
    console.log('Passei pela linha 2.');
    yield 'Parada 2';
    console.log('Passei pela linha 3.');
    yield 'Parada 3';
    console.log('Passei pela linha 4.');
    yield 'Fim de linha';
}

const linha = percorrerLinha477();

for(let parada of linha) {
    console.log(parada);
}