
var weakmap = new WeakMap();

var funcao = () => {};
var objeto = {};

/*Error: key deve ser um object
console.log( weakmap.set('string', 'sou uma string') );
*/
console.log(weakmap.set(funcao, 'sou uma função'));
console.log(weakmap.set(objeto, 'sou um objeto'));

console.log(weakmap.has(funcao));
console.log(weakmap.has({}));

console.log(weakmap.get(objeto));

console.log(weakmap.delete(funcao));
console.log(weakmap.has(funcao));

var Pessoa = (function() {
    var dadosPrivados = new WeakMap();

    function Pessoa(nome) {
        dadosPrivados.set(this, {nome: nome});
    }

    Pessoa.prototype.getNome = function getNome() {
        return dadosPrivados.get(this).nome;
    };

    Pessoa.prototype.setNome = function setNome(nome) {
        dadosPrivados.get(this).nome = nome;
    }

    return Pessoa;
})();

var daniel = new Pessoa('Daniel');
console.log( daniel.getNome() );
console.log( daniel.setNome('Daniel Lima'));
console.log( daniel.getNome());