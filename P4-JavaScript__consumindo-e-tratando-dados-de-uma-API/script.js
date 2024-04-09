const containerVideos = document.querySelector('.videos__container');

async function buscarEMostrarVideos() {
    try{
        const busca = await fetch('http://localhost:3000/videos');
        const videos = await busca.json();

        videos.forEach((video) => { // video são as propriedades obj dentro do array videos.
            if(video.categoria == ''){
                throw new Error('Video não tem categoria');
            }
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen> </iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                    <p class="categoria" hidden>${video.categoria}</p>
                </div>
            </li>
            `;
        })
    } catch(error){
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os videos: ${error}</p>`
    } finally {
        console.log('tentativa de carregamento dos videos!');
    }
}

buscarEMostrarVideos();
/*
    async = é utilizada para declarar que a function será assíncrona.
    await = aguardar que a busca seja feita tipo .then;
*/
/*
    try{} = ele vai executar esse codigo que estiver dentro dele. E se ele tiver algum erro ele vai da um stop nele e vai passar para o catch{}.

    catch{} = e no catch{} se realmente tiver algum erro ele vai executar oque tiver dentro dele. tipo (if / else || do / while).
    parecido com catch().

    finally{} = mesmo executando o TRY ou o CATCH o finally sempre vai executar junto com eles independe de qual seja.
*/
/*  
    fetch() = faz a busca no 'http://localhost:3000/videos'

    .then  = ele vai esperar a promise ser cumprida para acontecer alguma coisa. RESUMO: esperar ser comprida a promise.

    res.json() = vai transforma a resposta em json para melhor entendimento.

    .catch - ele vai pegar algum erro que está acontece e mostra!
    na para o programador ou user.

*/
// filtrar por barra de pesquisa:
const barraDePesquisa = document.querySelector('.pesquisar__input');

barraDePesquisa.addEventListener('input', filtrarPesquisa);

function filtrarPesquisa(){
    const videos = document.querySelectorAll('.videos__item');
    const valorFiltro = barraDePesquisa.value.toLowerCase();
    if(barraDePesquisa.value != ""){
        videos.forEach(video => {
            let titulo = video.querySelector('.titulo-video').textContent.toLowerCase();

            !titulo.includes(valorFiltro) ? video.style.display = 'none' : video.style.display = 'block';
        });
    }else{
        videos.forEach(video => video.style.display = 'block');
    }
}

// filtrar por categoria: 
const botaoCategoria = document.querySelectorAll('.superior__item');

botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute('name');
    botao.addEventListener('click', () => filtrarPorCategoria(nomeCategoria));
})

function filtrarPorCategoria(name) {
    const videos = document.querySelectorAll('.videos__item');
    videos.forEach((video) => {
        let categoria = video.querySelector('.categoria').textContent.toLowerCase();
        let valorFiltro = name.toLowerCase();

        !categoria.includes(valorFiltro) && valorFiltro != 'tudo' ? video.style.display = 'none' : video.style.display = 'block';
    });
}