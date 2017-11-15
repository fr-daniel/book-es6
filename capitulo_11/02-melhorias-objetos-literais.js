var nome = 'Daniel';
var idade = 19;

const seApresentar = function() {
    return `Olá! Eu sou o ${this.nome} e tenho ${this.idade} anos.`;
}
var person = {
    nome: nome,
    idade: idade,
    seApresentar: seApresentar
};

var person2 = {nome, idade, seApresentar}

var person3 = {
    nome,
    idade,
    seApresentar(){
        console.log(`I'm ${this.nome} and have ${this.idade} years.`);
    }
}

console.log(person, person2, person == person2);

console.log(person2.seApresentar());

person3.seApresentar();