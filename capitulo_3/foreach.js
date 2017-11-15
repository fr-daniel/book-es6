(function(){
    'use strict';
    
    var nomes = [ 'maria', 'josé', 'joão' ];

    //Com o for normal
    for( var i = 0; i < nomes.length; i++ ){
        console.log( nomes[ i ] );
    }

    //Com o forEach
    nomes.forEach(function( nome ){
        console.log( nome );
    });

    //forEach com função definida
    function imprimeNome( nome ){
        console.log( nome );
    }

    nomes.forEach( imprimeNome );

    //Os valores percorridos pelo forEach são determinados antes da primeira interação
    var canais = [ 'Globo', 'Band', 'SBT' ];

    canais.forEach(function( nome ){
        canais.push( 'Rede TV' ); //não aparece no console, mas é adicionado na lista de canais a cada interação
        console.log( nome );
    });

    console.log( canais );

})();