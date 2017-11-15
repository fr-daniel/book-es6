/*var boasVindas = function(nome) {
    return 'Seja bem vindo ' + nome;
}

//Trocando o function pelo fat arrow
var boasVindas = (nome) => {
    return 'Seja bem vindo ' + nome;
}

//Apenas um parâmetro pode-se eliminar os ()
var boasVindas = nome => {
    return 'Seja bem vindo ' + nome;
}

//Com apenas um linha podemos eliminar as {} e o return 

var boasVindas = nome => 'Seja bem vindo ' + nome;
*/

//Aplicando template string
var boasVindas = nome => `Seja bem vindo ${nome}`;

console.log( boasVindas('Daniel') );