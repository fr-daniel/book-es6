function Carro(modelo, chassi, qtdPortas) {
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdPortas = qtdPortas;
}

Carro.prototype.andar = function andar() {
    console.log('vrum vrum');
};


function Sonix(modelo, chassi, qtdPortas) {
    Carro.call(this, modelo, chassi, qtdPortas);
}

Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.constuctor = Sonix;  

Sonix.prototype.abrirTetoSolar = function abrirTetoSolar() {
    console.log('abrindo teto solar');
};

const sonix = new Sonix('Sonix', '122235531', 4);
console.log(sonix.modelo);
sonix.andar();
sonix.abrirTetoSolar();