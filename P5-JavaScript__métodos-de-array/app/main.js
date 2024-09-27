let livros = [];
const endpoitDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
addBuscaDelivrosAPI();

async function addBuscaDelivrosAPI() {
  try {
    const busca = await fetch(endpoitDaAPI);
    livros = await busca.json();
    let livrosComDesconto = aplicarDesconto(livros);
    ExibirLivrosNatela(livrosComDesconto);
  } catch (err) {
    console.warn(`Houve um erro com a operação: ${err}`);
  }
}
