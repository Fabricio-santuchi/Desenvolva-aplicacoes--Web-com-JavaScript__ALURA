const listaDeTeclas = document.querySelectorAll('.tecla');

//Estrutura de repetição: colando function dentro das teclas.
for(i = 0; i < listaDeTeclas.length; i++){
    
    const tecla = listaDeTeclas[i]; // pega as listas de teclas.
    const instrumento = tecla.classList[1]; // pega o a class de todos.
    const idAudio = `#som_${instrumento}`; // juntas as class o nome.

    listaDeTeclas[i].onclick = function () {
    // adiciona todos os ids a uma function com parametro.
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}

function tocaSom(seletorAudio){
    const som = document.querySelector(seletorAudio);

    if(som && som.localName === 'audio'){
        pauseErepassa(som);
    }else{
        console.log('Elemento não encontrado ou seletor invalido!');
    }
}

//-----------------------------------------------------
//Pause o som que já está em reprodução e repete ele.
function pauseErepassa(som){
    if(som.paused){
        som.play();
    }else{
        som.pause();
        som.currentTime = 0;
        som.play();
    }
}

