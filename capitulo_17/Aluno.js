let propriedades = new WeakMap();

class Aluno {
    constructor(nome, idade) {
        propriedades.set(this, {nome, idade});
    }

    get getNome() {
        return propriedades.get(this).nome;
    }
}

export default Aluno;