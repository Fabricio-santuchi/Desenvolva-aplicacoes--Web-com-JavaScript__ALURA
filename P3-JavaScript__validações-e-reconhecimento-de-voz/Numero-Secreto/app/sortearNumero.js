const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio(menorValor,maiorValor);

const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.textContent = menorValor;
const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.textContent = maiorValor;

function gerarNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroSecreto);
