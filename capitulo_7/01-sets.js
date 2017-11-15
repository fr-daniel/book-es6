/*
function Sets() {
    var array = [];
    
    this.size = array.length;

    this.add = function add(valor) {
        if(array.indexOf(valor) === -1) 
            array.push(valor);
    }

    this.get = function get(index) {
        return array[index];
    }

    this.mostarValores = function mostarValores() {
        console.log(array);
    }

}

var set = new Sets();
set.add(1);
set.add(1);
set.add(5);
set.mostarValores();
console.log(set.get(1));
*/

/*
var set = new Set([2,5,6]);

set.add(1)
set.add(2);
set.add(2);
console.log(set.add(3));
console.log('tamanho', set.size);
console.log(set.entries() );
console.log(set.keys());
console.log(set.values());
console.log(set.has(2));
console.log(set.delete(10));

for(var value of set) {
    console.log(value);
}
*/

var musicas = new Set(['musica1', 'musica2', 'musica3']);

musicas.clear();
musicas.add('musica4');
musicas.add('musica5');
console.log(musicas);
musicas.delete('musica4');

if(musicas.has('musica5'))
    console.log('Já está na lista!');

musicas.add('musica1');
console.log(`Há ${musicas.size} músicas na lista!`);

for(var musica of musicas) {
    console.log(musica);
}