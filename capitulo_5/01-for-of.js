
var numeros = [1, 2, 3, 4, 5];

for(var numero of numeros) {
    console.log(numero);
}


var perfilDoFacebook = {
    nome: 'Daniel',
    age: 19
};

/* Erro> perilDoFacebook is not iterable
for(dado of perfilDoFacebook) {
    console.log(dado);
}
*/

for(var key in perfilDoFacebook){
    console.log(perfilDoFacebook[key]);
}

for(var numero of numeros) {
    if(numero > 3) break;
    console.log(numero);
}

for(var numero of numeros) {
    if(numero === 3) continue;
    console.log(numero);
}

/*Erro: Illegal break statement
numeros.forEach(numero => {
    if(numero === 3) break;
    console.log(numero);
});
*/


