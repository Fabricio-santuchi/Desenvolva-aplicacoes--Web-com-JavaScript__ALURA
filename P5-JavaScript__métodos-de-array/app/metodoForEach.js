const sectionLivros = document.querySelector('#livros');
const elementoComValorTotalDelivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis');


function ExibirLivrosNatela(ListaDelivros) {
    elementoComValorTotalDelivrosDisponiveis.innerHTML = '';
    sectionLivros.innerHTML = '';
    const fragmento = document.createDocumentFragment();
    
    ListaDelivros.forEach((livro) => {
        let disponibilidade = livro.quantidade <= 0 ? 'livro__imagens indisponivel' : 'livro__imagens';
        const divLivro = document.createElement('div');
        divLivro.innerHTML = `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>`;
        fragmento.appendChild(divLivro);
    });    

    sectionLivros.appendChild(fragmento);
}