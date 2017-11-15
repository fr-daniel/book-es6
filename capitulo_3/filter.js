(function(){
    'use strict';

    var alunos = [
        { nome: 'João', idade: 19 },
        { nome: 'Maria', idade: 23 },
        { nome: 'José', idade: 13 }
    ];

    //maiores de idade com o for
    var maioresDeIdade = [];
    for( var i = 0; i < alunos.length; i++ ){
        if( alunos[ i ].idade >= 18 )
            maioresDeIdade.push( alunos[ i ] );
    }
    console.log( maioresDeIdade );

    //maiores de idade utilizando o filter
    var maiorIdade = alunos.filter(function( aluno ){
        return aluno.idade >= 18;
    });
    console.log( maiorIdade );

    //utlizando função não anônima

    alunos.push( { nome: 'Joana', idade: 34 } );

    function isMaiorDeIdade( aluno ){
        return aluno.idade >= 18;
    }

    maiorIdade = alunos.filter( isMaiorDeIdade );
    console.log( maiorIdade );

    //Se a função retornar true, o valor atual do parâmetro é adicionado no novo array,
    //se retornar false, o valor do parâmetro não é adicionado no novo array

})();