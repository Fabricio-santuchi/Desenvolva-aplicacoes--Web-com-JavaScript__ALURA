const lista = document.querySelectorAll("input[type=button]");
const inputTel = document.querySelector("input[type=tel]");

for (i = 0; i < lista.length; i++) {
  const tecla = lista[i];

  tecla.onclick = function () {
    inputTel.value += tecla.value;
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
