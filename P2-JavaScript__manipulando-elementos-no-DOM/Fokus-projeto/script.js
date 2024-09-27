const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const startPauseBt = document.querySelector("#start-pause");

const iniciarOuPausarBt = startPauseBt.querySelector("span");
const trocaIcon = startPauseBt.querySelector(".app__card-primary-butto-icon");
const tempoNaTela = document.querySelector("#timer");
const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("sons/luna-rise-part-one.mp3");
const audioPlay = new Audio("sons/play.wav");
const audioPausa = new Audio("sons/pause.mp3");
const audioTempoFinalizado = new Audio("sons/beep.mp3");

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

focoBt.addEventListener("click", () => {
  tempoDecorridoEmSegundos = 1500;
  //Muda cor de fundo. / Muda img / add titulo
  alterarContext("foco");

  //Deixa botao em foco.
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  tempoDecorridoEmSegundos = 300;
  //Muda cor de fundo.
  //Muda img.
  //add titulo
  alterarContext("descanso-curto");

  //Deixa botao em foco.
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
  tempoDecorridoEmSegundos = 900;
  //Muda cor de fundo.
  //Muda img.
  //add titulo
  alterarContext("descanso-longo");

  //Deixa botao em foco.
  longoBt.classList.add("active");
});

function alterarContext(contexto) {
  mostrarTempo();
  botoes.forEach(function (contexto) {
    contexto.classList.remove("active");
  });
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `./imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `
            Otimize sua produtividade, <br> 
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
      break;
    case "descanso-curto":
      titulo.innerHTML = `
            Que tal dar uma respirada? <br> 
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `;
      break;
    case "descanso-longo":
      titulo.innerHTML = `
            Hora de voltar à superfície. <br> 
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `;
      break;
    default:
      break;
  }
}

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    audioTempoFinalizado.play();
    alert("Tempo finalizado!");
    const focoAtivo = html.getAttribute("data-contexto") == "foco";
    if (focoAtivo) {
      const evento = new CustomEvent("FocoFinalizado");
      document.dispatchEvent(evento);
    }
    zerar();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  mostrarTempo();
};

startPauseBt.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    audioPausa.play();
    zerar();
    return;
  }
  audioPlay.play();
  intervaloId = setInterval(contagemRegressiva, 1000);
  iniciarOuPausarBt.textContent = "Pausar";
  trocaIcon.setAttribute("src", "imagens/pause.png");
}

function zerar() {
  clearInterval(intervaloId);
  iniciarOuPausarBt.textContent = "Começar";
  trocaIcon.setAttribute("src", "imagens/play_arrow.png");
  intervaloId = null;
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-Br", {
    minute: "2-digit",
    second: "2-digit",
  });
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();
