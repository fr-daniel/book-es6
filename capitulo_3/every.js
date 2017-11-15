(function(){
    'use strict';

    var alunos = [
        { nome: 'João', idade: 19 },
        { nome: 'Maria', idade: 23 },
        { nome: 'José', idade: 13 },
        { nome: 'Joana', idade: 34 }
    ];

    var todosOsAlunosMaioresDeIdade = true;
    for( var i = 0; i < alunos.length; i++ ){
        if( alunos[ i ].idade <= 18 ){
            todosOsAlunosMaioresDeIdade = false;
            break;
        }
    }
    console.log( todosOsAlunosMaioresDeIdade );

    todosOsAlunosMaioresDeIdade = true;
    todosOsAlunosMaioresDeIdade = alunos.every(function( aluno ){
        return aluno.idade >= 18;
    });

    console.log( todosOsAlunosMaioresDeIdade );

    //Retorna true se todos os itens do array atenderem a condição, retorna false caso contrário

})();