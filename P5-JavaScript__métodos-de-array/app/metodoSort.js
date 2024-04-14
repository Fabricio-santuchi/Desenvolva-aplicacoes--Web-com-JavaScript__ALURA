const btnOrdenar = document.querySelector('#btnOrdenarPorPreco');

btnOrdenar.addEventListener('click', OrdernarLivrosPorPreco);

function OrdernarLivrosPorPreco() {
    const livrosOrdenados = livros.sort((a, b) => b.preco - a.preco);
    ExibirLivrosNatela(livrosOrdenados);
}