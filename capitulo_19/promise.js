let promise = new Promise((resolve, reject) => {
    let resultado = true;
    let tempo = 2000;
    setTimeout(() => {
        if(resultado) {
            resolve('Ebah! Deu tudo certo :)');
        } else {
            reject('Ops! Deu tudo errado :(');
        }
    }, tempo);
});


promise
    .then((data) => {
        console.log(`Resultado positivo:`);
        return data;
    })
    .then((data) => console.log(`${data.toUpperCase()}`))
    .catch((data) => console.log(`Resultado negativo: ${data}`));

console.log('fui executado antes!');