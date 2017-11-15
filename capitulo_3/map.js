(function(){
    'use strict';
    
    var numeros = [ 1, 2, 3, 4, 5 ];
    var dobro = [];

    //Dobro usando o for
    for( var i = 0; i < numeros.length; i++ ){
        dobro.push( numeros[ i ] * 2 );
    }
    console.log( dobro );

    //Triplo usando for map
    var triplo = numeros.map(function( numero ){
        return numero * 3; 
    });
    console.log( triplo );

    function calcularDobro( number ){
        return number * 2;
    }

    dobro = numeros.map( calcularDobro );
    console.log( dobro );
    
    console.log( numeros === dobro ); // false
    
    //array numeros nunca é alterado, map retorna uma nova instância de Array 
})();