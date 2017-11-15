(function(){
    'use strict';

    var alunos = [
        { nome: 'João', idade: 19 },
        { nome: 'Maria', idade: 23 },
        { nome: 'José', idade: 13 },
        { nome: 'Joana', idade: 34 }
    ];
    
    //Buscar aluno com o for
    var aluno;
    for( var i = 0; i < alunos.length; i++ ){
        console.log( i );
        if( alunos[ i ].nome === 'José' ){
            aluno = alunos[ i ];
            break;
        }
    }
    console.log( aluno );

     //Buscar aluno com o find
     aluno = alunos.find( function( aluno ){ 
        return aluno.nome = 'Maria';
     });
     console.log( aluno );

    //Se existir mais de um aluno com o mesmo nome, apenas o primeiro é retornado
    //Se não existir, retorna undefined
    
    //Buscar com função não anônima
    function getNameAlunoSearch( nome ){
        return nome;
    }

    function searchAluno( aluno ){
        return aluno.nome === getNameAlunoSearch( 'Joana' );
    } 

    aluno = alunos.find( searchAluno );
    console.log( aluno );

})();