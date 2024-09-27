function ValorDosLivrosTotal(livros) {
  return livros.reduce((acc, valor) => acc + valor.preco, 0).toFixed(2);
}
