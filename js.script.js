const moviePanel = document.getElementById('movie-panel');
const closePanelBtn = document.getElementById('close-panel');

let currentMovieId = null;

// Objeto que mapeia título para descrição personalizada
const movieDescriptions = {
  "Boto-cor-de-rosa": "O Boto-cor-de-rosa é um golfinho de água doce que habita os rios da Amazônia, conhecido por sua coloração rosada e folclore local.",
  "Cobra Grande": "A Cobra Grande é uma entidade mítica das lendas amazônicas, representando força e mistério das águas.",
  "Curupira": "Curupira é uma criatura do folclore brasileiro que protege as florestas e tem os pés virados para trás.",
  "Iara": "Iara é uma sereia das águas doces, conhecida por sua beleza e canto hipnotizante.",
  "Matinta Pereira": "Matinta Pereira é uma entidade folclórica amazônica associada a assombrações e mistérios noturnos.",
  "Muiraquitã": "Muiraquitã é um amuleto indígena, símbolo de proteção e poder.",
  // continue adicionando todos os títulos que você tiver...
  "Maniçoba": "Maniçoba é um prato típico amazônico feito com folhas de mandioca cozidas por vários dias.",
  "Tacacá": "Tacacá é uma sopa tradicional da Amazônia com tucupi, jambu e camarão.",
  // ...
  "Círio de Nazaré": "O Círio de Nazaré é a maior festa religiosa do Pará, celebrando a Virgem de Nazaré.",
  // e assim por diante para todos os títulos que você tem...
};

// Seleciona todos os cards
document.querySelectorAll('.movie-item').forEach(movie => {
  movie.addEventListener('click', () => {
    const title = movie.querySelector('.overlay').textContent;
    const imgSrc = movie.querySelector('img').src;
    const movieId = title + imgSrc; // identificador simples

    // Fecha se clicar no mesmo filme e painel aberto
    if (moviePanel.classList.contains('open') && movieId === currentMovieId) {
      moviePanel.classList.remove('open');
      currentMovieId = null;
      return;
    }

    // Atualiza conteúdo do painel
    document.getElementById('movie-title').textContent = title;
    // Pega a descrição certa do objeto ou uma padrão
    document.getElementById('movie-description').textContent = movieDescriptions[title] || "Descrição não disponível.";
    document.getElementById('movie-image').src = imgSrc;

    // Abre painel
    moviePanel.classList.add('open');
    currentMovieId = movieId;
  });
});

closePanelBtn.addEventListener('click', () => {
  moviePanel.classList.remove('open');
  currentMovieId = null;
});


document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("conheca-projeto-btn");
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");
  const closeBtn = modal.querySelector(".close");

  function openModal() {
    modal.classList.remove("hidden", "fade-out");
    modalContent.classList.remove("fade-out-content");
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.classList.add("fade-out");
    modalContent.classList.add("fade-out-content");

    // Espera a animação terminar antes de esconder
    setTimeout(() => {
      modal.classList.add("hidden");
      modal.style.display = "none";
    }, 300); // tempo da animação
  }

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});



