
function defineMensagem(strings, ...values){
    const hora = values[0];
    if (hora >= 6 && hora <= 12)
        values[0] = 'Bom dia';
    else if (hora > 12 && hora <= 18)
        values[0] = 'Boa tarde';
    else
        values[0] = 'Boa noite'; 
    values[0] += ', são';
    return `${values[0]} ${hora} ${strings[1]}.`;
}

const horas = new Date().getHours();
const mensagem = defineMensagem`Bom dia, são ${horas} horas`;
console.log(mensagem);
