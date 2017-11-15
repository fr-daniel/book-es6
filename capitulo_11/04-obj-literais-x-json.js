
const $formulario = document.querySelector('[data-js="formulario"]');

function obterDados() {
    const nome = document.querySelector('[data-js="nome"]').value;
    const idade = document.querySelector('[data-js="sexo"]').value;
    const sexo = document.querySelector('[data-js="sexo"]').value;
    const convenio = document.querySelector('[data-js="convenio"]').value;
    return {nome, idade, sexo, convenio};
}

function handleForm(event) {
    console.log( obterDados() );
}

$formulario.addEventListener('submit', handleForm, false);

/*
const url = 'https://sistemasaude.com.br/api/cadastros/paciente';
const dados = obterDadosDaTela();
const dadosJson = JSON.stringfy(dados);

$.ajax({
    url: url,
    dataType: 'json',
    contentType: 'application/json; charset=UTF-8' 
    data: dadosJson,
    type: 'POST,
    complete: callback
});*/