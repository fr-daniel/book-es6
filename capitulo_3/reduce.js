(function(){
    'use strict';

    var valores = [ 1, 2, 3, 4, 5 ];

    //Somar todos os valores de um array com um for
    var soma = 0;
    for( var i = 0; i < valores.length; i++ ){
        soma += valores[ i ];
    }
    console.log( soma );

    valores.push( 10, 20 );

    soma = valores.reduce(function( acumulado, valorAtual ){
        return acumulado += valorAtual;
    }, 0); 
    console.log( soma );

    //Segundo Exemplo

    var alunos = [
        { nome: 'João', idade: 19 },
        { nome: 'Maria', idade: 23 },
        { nome: 'José', idade: 13 },
        { nome: 'Joana', idade: 34 }
    ];

    var nomesAlunos = alunos.reduce( function( arrayNomes, alunoAtual ){ 
        arrayNomes.push( alunoAtual.nome );
        return arrayNomes;
    }, [] );

    console.log( nomesAlunos );

})();