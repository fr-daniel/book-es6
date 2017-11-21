
class Usuario {
    constructor(login, senha) {
        this.login = login;
        this.senha = senha;
    }
}

const validador = {
    set(alvo, propriedade, valor) {
        if(propriedade === 'idade') {
            if(!Number.isInteger(valor)) {
                throw new TypeError('A idade não é um número!');
            }
        }
        alvo[propriedade] = valor;
    }
};

const usuario = new Proxy({}, validador);

console.log( usuario.idade = 10 );

/*const proxy = new Proxy(usuario, {get(alvo, propriedade) {
    console.log(`A ${propriedade} foi solicitada!`);
    return alvo[propriedade];
}
});

console.log(usuario.login);
console.log(proxy.senha);*/

