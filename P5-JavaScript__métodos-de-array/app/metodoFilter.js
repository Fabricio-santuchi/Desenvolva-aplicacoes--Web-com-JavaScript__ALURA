const botoes = document.querySelectorAll(".btn");

botoes.forEach((botao) => {
  botao.addEventListener("click", filtrarLivros);
});

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  console.log(categoria);
  const livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(categoria);
  ExibirLivrosNatela(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = ValorDosLivrosTotal(livrosFiltrados);
    exibirValorTotalNaTela(valorTotal);
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalNaTela(valorTotal) {
  elementoComValorTotalDelivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `;
}
