(function(){
    'use strict';

    var pesoDasMalas = [ 4, 23, 51, 10, 50, 100 ];
    var temMalaAcimaDoPeso = false;

    //com o for nomal
    for( var i = 0;  i < pesoDasMalas.length; i++ ){
        if( pesoDasMalas[ i ] > 50 ){
            temMalaAcimaDoPeso = true;
            break;
        }
    }
    console.log( temMalaAcimaDoPeso );

    //com some
    temMalaAcimaDoPeso = false;
    temMalaAcimaDoPeso = pesoDasMalas.some(function( peso ){
        return peso > 50;
    });
    console.log( temMalaAcimaDoPeso );

    //Se encontrar um caso que satisfaz a condição, para o loop e retorna true. Caso contrário, o array é completamente percorrido e retorna false

})();