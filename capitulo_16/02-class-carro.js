class Carro {
    constructor(modelo, chassi, qtdPortas) {
        this.modelo = modelo;
        this.chassi = chassi;
        this.qtdPortas = qtdPortas;
    }

    andar() {
        console.log('vrum vrum');
    }
}

class Sonix extends Carro {
    constructor(modelo, chassi, qtdPortas) {
        super(modelo, chassi, qtdPortas);
    }

    abrirTetoSolar() {
        console.log('brindo teto solar');
    }
}

const basico = new Carro('básico', '22553214', 4);
console.log(basico.modelo);
console.log(basico.chassi);
console.log(basico.qtdPortas);
basico.andar();

const sonix = new Sonix('Sonix', '2233442111', 2);
sonix.abrirTetoSolar();
sonix.andar();
console.log(sonix.modelo);

class Casa {
    static abrirPorta() {
        console.log('abrindo porta!');
    }
}

Casa.abrirPorta();

const propriedades = new WeakMap();

class VideoGame {
    constructor(nome, controles, midia, saida) {
        propriedades.set(this, {nome, controles, midia, saida});
    }

    get getNome() {
        return propriedades.get(this)['nome'].toUpperCase();
    }

    set setNome(nome) {
        propriedades.get(this)['nome'] = nome;
    }

    recuperarPropriedade(propriedade) {
        return propriedades.get(this)[propriedade];
    }
}

const videogame = new VideoGame('caixa121', 4, 'dvd', 'hdmi');
videogame.setNome = 'danielgame';
console.log(videogame.recuperarPropriedade('nome'));
console.log(videogame.getNome);