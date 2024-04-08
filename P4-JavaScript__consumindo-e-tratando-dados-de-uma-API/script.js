const containerVideos = document.querySelector('.videos__container');

const api = fetch('http://localhost:3000/videos')
.then(res => res.json())
.then((videos) => { // videos e a lista.json que ficou com nome de videos.
    videos.forEach((video) =>{ // video são as propriedades obj dentro do array videos.
        containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen> </iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>`
    })
})
.catch((error) =>{
    containerVideos.innerHTML = `<p>Houve um erro ao carregar os videos: ${error}</p>`;
})

/*  
    fetch() = faz a busca no 'http://localhost:3000/videos'

    .then  = ele vai esperar a promise ser cumprida para acontecer alguma coisa. RESUMO: esperar ser comprida a promise.

    res.json() = vai transforma a resposta em json para melhor entendimento.

    .catch - ele vai pegar algum erro que está acontece e mostra!
    na para o programador ou user.

    */

