
var cidades = ['Quixadá', 'Fortaleza', 'Rio Branco', 'São Paulo', 'Rio de Janeiro'];
var iteratorCity = cidades[Symbol.iterator]();

/*
console.log(iteratorCity.next().value); //value: Quixadá, done: false
console.log(iteratorCity.next().done); //value: Fortaleza, done: false
console.log(iteratorCity.next()); //value: São Paulo, done: false
console.log(iteratorCity.next()); //Value: Rio de Janeiro, done: false
console.log(iteratorCity.next()); //value: undefined, done: true
*/

var proximo = iteratorCity.next();

do {    
    if(isAcre(proximo.value)){
        console.log(proximo.value)
        break;
    }
    proximo = iteratorCity.next();
} while( !proximo.done )

function isAcre(cidade) {
    var cidadesAcre = ['Rio Branco', 'Feijo', 'Cruzeiro do Sul'];
    return cidadesAcre.find((city) => cidade === city ) ? true : false;
}