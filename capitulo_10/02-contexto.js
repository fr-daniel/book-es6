console.log(this);

function imprimeMeuContextodeExecucao() {
    console.log(this);
}

imprimeMeuContextodeExecucao();

var objeto = {
    meuContexto: function() {
        console.log(this);
    }
};

objeto.meuContexto();

/*const equipe = {
    nome: 'Guerreiros Z',
    membros: ['Goku', 'Kuririn', 'Vegeta'],
    membrosDaEquipe: function membrosDaEquipe() {
        const that = this;
        this.membros.forEach(function(membro) {
            console.log(`${membro} é da equipe ${that.nome}`);
        });   
    }
};*/

/*
const equipe = {
    nome: 'Guerreiros Z',
    membros: ['Goku', 'Kuririn', 'Vegeta'],
    membrosDaEquipe: function membrosDaEquipe() {
        this.membros.forEach(function(membro) {
            console.log(`${membro} é da equipe ${this.nome}`);
        }).bind(this);
    }
};
*/

const equipe = {
    nome: 'Guerreiros Z',
    membros: ['Goku', 'Kuririn', 'Vegeta'],
    membrosDaEquipe: function membrosDaEquipe() {
        this.membros.forEach(membro => console.log(`${membro} é da equipe ${this.nome}`));
    }
};

equipe.membrosDaEquipe();

