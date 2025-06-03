const moviePanel = document.getElementById('movie-panel');
const closePanelBtn = document.getElementById('close-panel');

let currentMovieId = null;

// Objeto que mapeia título para descrição personalizada
const movieDescriptions = {
  "Boto-cor-de-rosa": "O boto-cor-de-rosa é um golfinho de água doce encontrado na Bacia Amazônica, conhecido por sua coloração que varia do cinza ao rosa intenso. Cercado por lendas, como a de que se transforma em homem para seduzir mulheres, ele é um dos maiores golfinhos fluviais. Sua dieta consiste em peixes, crustáceos e pequenos quelônios. Atualmente, a espécie é classificada como ameaçada de extinção, principalmente devido à poluição, pesca predatória e construção de hidrelétricas.",

  "Cobra Grande": "A Cobra Grande, também conhecida como Boiúna ou Sucuriju, é uma figura lendária da mitologia amazônica, frequentemente descrita como uma gigantesca serpente que habita os rios e igarapés. Acredita-se que ela possua poderes sobrenaturais, podendo causar tempestades, inundações e até mesmo mover ilhas. Em algumas versões, é vista como protetora da natureza, punindo aqueles que a desrespeitam. Já em outras, assume um caráter mais temível, sendo responsável por naufrágios e desaparecimentos. A lenda reflete a imponente força da natureza amazônica e o respeito das comunidades ribeirinhas pelos mistérios e perigos da floresta.",

  "Curupira": "O Curupira é um lendário protetor da floresta amazônica e de seus animais, conhecido por seus cabelos vermelhos e, distintivamente, seus pés virados para trás. Essa característica confunde caçadores, fazendo suas pegadas levarem na direção oposta. Ele pune severamente quem agride a natureza, desorientando-os ou assustando-os na mata. Sua lenda reforça a importância do respeito e da preservação ambiental, sendo um guardião implacável da biodiversidade.",

  "Matinta Pereira": "A Matinta Pereira é uma entidade do folclore amazônico, frequentemente descrita como uma mulher velha que se transforma em coruja, assombrando a noite com seu assobio melancólico. A lenda diz que ela pede fumo ou comida e, se não for atendida, roga pragas sobre as casas. Sua presença simboliza os mistérios e medos noturnos da floresta, reforçando a crença em forças ocultas e a importância de respeitar seus rituais.",

   "Muiraquitã":"O Muriaquitã é um pequeno e poderoso amuleto indígena da Amazônia, esculpido em pedra verde no formato de sapo ou rã. Associado às lendas das Icamiabas, as guerreiras sem maridos, que o retiravam do lago verde, ele atrai sorte, felicidade, fertilidade e proteção. Passado entre gerações, o Muriaquitã é um símbolo da fé e da rica cultura ancestral da região..",
  // continue adicionando todos os títulos que você tiver...
  "Maniçoba": "A maniçoba é um prato paraense icônico, apelidado de feijoada sem feijão. Sua base é a maniva, folha moída da mandioca brava, que requer no mínimo sete dias de cozimento para eliminar a toxicidade. Preparada com diversas carnes salgadas e defumadas, é servida com arroz e farinha d'água. É um prato robusto e saboroso, essencial em celebrações como o Círio de Nazaré, refletindo a riqueza cultural da culinária local.",
  // ...
  "Círio de Nazaré": "O Círio de Nazaré é a maior e mais emocionante procissão católica do mundo, celebrada anualmente no segundo domingo de outubro em Belém, Pará. Milhões de fiéis homenageiam Nossa Senhora de Nazaré, a Padroeira da Amazônia, em um espetáculo de fé que culmina na procissão da imagem da Santa em uma berlinda, puxada por uma corda. Reconhecido como Patrimônio Cultural Imaterial da Humanidade pela UNESCO, o Círio transcende a religião, sendo um pilar da cultura amazônica.",

  "Boi Bumbá": "O Boi Bumbá é uma das mais vibrantes e tradicionais festas populares da Amazônia, especialmente celebrada em Parintins, Amazonas. A festa gira em torno da disputa entre dois bois, Garantido e Caprichoso, que representam as culturas indígena e cabocla. Com danças, músicas, e encenações teatrais, o Boi Bumbá é uma explosão de cores e ritmos que celebra a identidade amazônica. Reconhecido como Patrimônio Cultural Imaterial do Brasil, o evento atrai turistas de todo o mundo, promovendo a cultura local e a união das comunidades.",
  
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



