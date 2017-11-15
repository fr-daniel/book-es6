var musica1 = {
    titulo: 'Music One',
    autor: 'One'
};

var musica2 = {
    titulo: 'Music Two',
    autor: 'Two'
};

var musicas = new WeakSet([musica1]);

console.log(musicas.add(musica2));