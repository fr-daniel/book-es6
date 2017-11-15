
var map = new Map();
var funcao = () => {};
var objeto = {};

map.set('string', 'sou uma string');
map.set(funcao, 'sou uma funcao');
console.log(map.set(objeto, 'sou um objeto'));

console.log(map.get('string'));
console.log(map.get(funcao));
console.log(map.get(objeto));

console.log('tamanho:', map.size);

console.log('existe uma string', map.has('string'));
console.log('existe um {}', map.has({}));
console.log('existe um objeto', map.has(objeto));

//console.log(map.delete('string')); //true
//console.log(map.delete('string')); //false: já foi deletado

//console.log('limpar map', map.clear());
//console.log('novo tamanho', map.size);

for(var key of map.keys()) {
    console.log(key);
}

for(var value of map.values()) {
    console.log(value);
}

for(var item of map.entries()) {
    console.log(`Minha key: ${item[0]}, minha chave: ${item[1]}`);
}

map.forEach((value, key) => {
    console.log(value, key);
}, map);

