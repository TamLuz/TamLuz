const form = document.getElementById('meuForm')

function Enviar() {
    var nome = document.getElementById('name');

    if (nome.value !="") {
        alert('Olá, sr(a)' + nome.value + ', aguarde uns instantes para avaliação com o reCAPTCHA')
    }
}