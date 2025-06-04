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

  "Boi-Bumbá": "O Boi Bumbá é uma das mais vibrantes e tradicionais festas populares da Amazônia, especialmente celebrada em Parintins, Amazonas. A festa gira em torno da disputa entre dois bois, Garantido e Caprichoso, que representam as culturas indígena e cabocla. Com danças, músicas, e encenações teatrais, o Boi Bumbá é uma explosão de cores e ritmos que celebra a identidade amazônica. Reconhecido como Patrimônio Cultural Imaterial do Brasil, o evento atrai turistas de todo o mundo, promovendo a cultura local e a união das comunidades.", 

  "Festival de Parintins": "O Festival de Parintins, realizado anualmente na cidade de Parintins, Amazonas, é uma das maiores festas folclóricas do Brasil. Celebrado no último fim de semana de junho, o evento reúne milhares de pessoas para assistir à disputa entre os bois Garantido e Caprichoso. Com apresentações vibrantes que incluem danças, músicas e encenações teatrais, o festival é um espetáculo de cores e ritmos que celebra a cultura amazônica. Reconhecido como Patrimônio Cultural Imaterial do Brasil, o Festival de Parintins atrai turistas de todo o mundo, promovendo a identidade local e a união das comunidades.",

  "iara" : "A Iara, também conhecida como Mãe d'Água, é uma figura lendária do folclore amazônico, descrita como uma bela mulher com cauda de peixe. Ela habita os rios e igarapés da região, atraindo pescadores e viajantes com seu canto hipnotizante. Segundo a lenda, aqueles que se aproximam demais são seduzidos e levados para o fundo das águas, onde encontram sua perdição. A Iara simboliza a beleza e o perigo da natureza selvagem da Amazônia, refletindo o respeito e o temor que as comunidades ribeirinhas têm pelos mistérios dos rios.",

  "Tacacá" : "O tacacá é uma iguaria típica da culinária amazônica, especialmente popular no Pará. Trata-se de uma sopa quente feita com tucupi (um caldo extraído da mandioca brava), goma de tapioca, camarões secos, jambu (uma erva que provoca uma leve dormência na boca) e temperos como alho e pimenta. Servido em cuias, o tacacá é um prato reconfortante e cheio de sabor, frequentemente consumido nas ruas e feiras, especialmente durante as noites frias da região. É um símbolo da rica gastronomia amazônica e da cultura paraense.",

  "Açaí" : "O açaí é uma fruta típica da Amazônia, conhecida por seu sabor único e propriedades nutricionais. Originária da palmeira Euterpe oleracea, o açaí é amplamente consumido na forma de polpa congelada, sucos ou em tigelas acompanhadas de granola, banana e mel. Rico em antioxidantes, fibras e ácidos graxos essenciais, o açaí é considerado um superalimento. Além de sua popularidade local, ganhou destaque internacional como um símbolo da dieta saudável e sustentável da Amazônia.",

  "Pupunha" : "A pupunha é uma palmeira nativa da Amazônia, conhecida por seus frutos comestíveis e palmito. O fruto da pupunha é pequeno, redondo e de coloração amarela ou laranja, sendo consumido tanto in natura quanto em preparações culinárias. O palmito de pupunha é valorizado por sua textura macia e sabor delicado, sendo amplamente utilizado em saladas e pratos quentes. A pupunha é uma planta sustentável, pois seu cultivo não requer desmatamento, contribuindo para a preservação da floresta amazônica.",

  "Pato no Tucupi" : "O pato no tucupi é um prato tradicional da culinária paraense, especialmente popular durante o Círio de Nazaré. Consiste em pato cozido lentamente em tucupi, um caldo amarelo extraído da mandioca brava, temperado com jambu (uma erva típica que provoca uma leve dormência na boca) e especiarias. Servido com arroz branco e farinha d'água, o prato é uma explosão de sabores e texturas, refletindo a rica gastronomia amazônica. O pato no tucupi é mais do que uma refeição; é uma celebração da cultura e tradições paraenses.",

  "Caldeirada de tambaqui" : "A caldeirada de tambaqui é um prato típico da culinária amazônica, especialmente apreciado no estado do Amazonas. Feita com o famoso peixe tambaqui, conhecido por sua carne saborosa e suculenta, a caldeirada é preparada com legumes frescos, como batata-doce, cenoura e pimentão, além de temperos regionais. Cozida lentamente em um caldo aromático, a caldeirada de tambaqui é um prato reconfortante e nutritivo, frequentemente servido em festas e celebrações locais. É uma verdadeira iguaria que reflete a riqueza dos recursos naturais da Amazônia.",

  "Arraial do Pavulagem" : "O Arraial do Pavulagem é um dos mais tradicionais e vibrantes festivais culturais do Pará, realizado anualmente em Belém. Originado como uma celebração popular, o evento reúne música, dança, teatro e artesanato, destacando a rica cultura amazônica. Durante o festival, grupos folclóricos se apresentam com danças típicas, como o carimbó e o boi-bumbá, enquanto barracas oferecem comidas e bebidas regionais. O Arraial do Pavulagem é uma verdadeira festa da cultura paraense, promovendo a identidade local e atraindo turistas de todo o Brasil e do mundo.",

  "Festas Indígenas" : "As festas indígenas na Amazônia são celebrações ricas em tradições e cultura, refletindo a diversidade dos povos nativos da região. Cada tribo possui suas próprias festividades, que podem incluir danças, rituais, cantos e cerimônias espirituais. Essas festas são momentos de união comunitária, onde se celebra a conexão com a natureza, os ancestrais e as tradições culturais. Além disso, muitas dessas festividades são abertas ao público, permitindo que visitantes conheçam e respeitem as práticas e crenças indígenas, promovendo o intercâmbio cultural e a preservação das tradições amazônicas.",

  "Congada" : "A conga é uma dança tradicional da Amazônia, especialmente popular no estado do Pará. Originária das influências africanas, indígenas e portuguesas, a conga é caracterizada por seus ritmos contagiantes e passos vibrantes. Durante as festividades, grupos de dançarinos se reúnem para celebrar com trajes coloridos e instrumentos típicos, como tambores e maracás. A conga não é apenas uma dança; é uma expressão cultural que une comunidades, preservando tradições e promovendo a alegria e a celebração da vida na Amazônia.",

  "Carnaval de Manaus" : "O Carnaval de Manaus é uma das festas mais tradicionais da região Norte do Brasil, com forte influência das culturas amazônica e afro-brasileira. A celebração inclui desfiles de escolas de samba no Sambódromo, blocos de rua animados e eventos culturais por toda a cidade. Um destaque é o Carnaboi, que mistura o ritmo do boi-bumbá com o espírito do carnaval. A festa atrai moradores e turistas, valorizando as tradições locais. É uma manifestação vibrante da identidade cultural manauara.",

  "Onça-pintada" : "A onça-pintada, também conhecida como jaguar, é o maior felino das Américas e um dos mais icônicos da fauna amazônica. Com sua pelagem dourada salpicada de manchas pretas, a onça é um predador solitário e territorial, adaptado para viver em diversos habitats, desde florestas densas até áreas pantanosas. Ela desempenha um papel crucial no ecossistema amazônico como topo da cadeia alimentar, ajudando a controlar as populações de presas. No entanto, a onça enfrenta ameaças significativas devido à perda de habitat e à caça ilegal, tornando sua conservação uma prioridade na proteção da biodiversidade amazônica.",

  "Vitória-régia" : "A vitória-régia é uma das mais impressionantes plantas aquáticas da Amazônia, conhecida por suas enormes folhas circulares que podem atingir até três metros de diâmetro. Suas flores, que se abrem à noite e fecham ao amanhecer, são brancas no primeiro dia e tornam-se rosa no segundo. A vitória-régia é um símbolo da biodiversidade amazônica e desempenha um papel importante no ecossistema aquático, fornecendo abrigo e alimento para diversas espécies. Além disso, é uma planta culturalmente significativa para as comunidades ribeirinhas, sendo utilizada em artesanato e tradições locais.",

  "Arara-azul" : "A arara-azul é uma das aves mais emblemáticas da Amazônia, conhecida por sua plumagem vibrante de azul intenso e amarelo. Essas aves são altamente sociais e vivem em bandos, frequentemente avistadas voando majestosas sobre as copas das árvores. A arara-azul desempenha um papel crucial na dispersão de sementes, ajudando a manter a saúde dos ecossistemas florestais. No entanto, a espécie enfrenta ameaças significativas devido à perda de habitat e ao tráfico ilegal de animais silvestres, tornando sua conservação uma prioridade para a preservação da biodiversidade amazônica.",

  "Castanheira" : "A castanheira-do-pará, também conhecida como castanha-do-brasil, é uma árvore majestosa nativa da Amazônia, famosa por suas grandes sementes comestíveis, conhecidas como castanhas-do-pará. Essas árvores podem atingir até 50 metros de altura e são fundamentais para o ecossistema amazônico, fornecendo abrigo e alimento para diversas espécies. As castanhas são ricas em nutrientes e óleos saudáveis, sendo altamente valorizadas tanto localmente quanto internacionalmente. A exploração sustentável da castanheira é crucial para a economia das comunidades ribeirinhas e para a conservação da floresta.",

  "Bicho-preguiça" : "O bicho-preguiça é um mamífero icônico da Amazônia, conhecido por seu ritmo de vida lento e sua dieta exclusiva de folhas. Com garras longas e adaptadas para escalar árvores, o bicho-preguiça passa a maior parte do tempo pendurado nos galhos, onde se camufla entre a folhagem. Sua digestão lenta permite que ele aproveite ao máximo os nutrientes das folhas, mas também o torna vulnerável a predadores. Apesar de sua aparência tranquila, o bicho-preguiça desempenha um papel importante no ecossistema amazônico, ajudando na dispersão de sementes e na manutenção da biodiversidade.",

  "Seringueira" : "A seringueira, também conhecida como Hevea brasiliensis, é uma árvore nativa da Amazônia famosa por sua seiva, o látex, que é a matéria-prima para a produção de borracha. Essas árvores podem atingir até 30 metros de altura e são cultivadas em plantações extensivas na região. A extração do látex é um processo sustentável que não prejudica a árvore, permitindo que ela produza por muitos anos. A seringueira desempenhou um papel crucial na economia amazônica durante o ciclo da borracha no século XIX e continua a ser uma fonte importante de renda para muitas comunidades ribeirinhas.",

  "Carimbó" : "O carimbó é uma dança tradicional da Amazônia, especialmente popular no estado do Pará. Originado das influências indígenas, africanas e portuguesas, o carimbó é caracterizado por seus ritmos contagiantes e passos vibrantes. Durante as festividades, grupos de dançarinos se reúnem para celebrar com trajes coloridos e instrumentos típicos, como tambores e maracás. O carimbó não é apenas uma dança; é uma expressão cultural que une comunidades, preservando tradições e promovendo a alegria e a celebração da vida na Amazônia.",

  "Lundu" : "O lundu é uma dança afro-brasileira que tem suas raízes na cultura africana, especialmente nas tradições dos escravizados trazidos para o Brasil. Na Amazônia, o lundu é uma expressão cultural vibrante, caracterizada por seus ritmos contagiantes e movimentos sensuais. Frequentemente acompanhado por instrumentos de percussão, como tambores e pandeiros, o lundu é dançado em celebrações e festivais, refletindo a rica herança africana na música e dança amazônicas. É uma manifestação cultural que promove a identidade e a resistência das comunidades afrodescendentes na região.",

  "Tecnobrega" : "A Tecnobrega é um gênero musical originado no Pará, que mistura ritmos tradicionais como o brega, o carimbó e a lambada com influências eletrônicas. Caracterizada por suas batidas aceleradas e letras românticas, a Tecnobrega se tornou um fenômeno cultural na Amazônia, especialmente entre os jovens. As festas de Tecnobrega são animadas e repletas de dança, atraindo multidões em todo o estado. O gênero reflete a criatividade e a inovação musical da região, promovendo uma identidade cultural única e contemporânea.",

  "Guitarrada" : "A guitarrada é um gênero musical típico da Amazônia, especialmente popular no estado do Pará. Originada das influências do carimbó e do brega, a guitarrada é caracterizada pelo uso de guitarras elétricas e ritmos dançantes. As músicas geralmente falam sobre amor, festas e a vida cotidiana na região. A guitarrada é uma expressão cultural vibrante que une comunidades e promove a identidade paraense, sendo frequentemente tocada em festas e eventos locais. É um símbolo da rica diversidade musical da Amazônia.",

  "Marabaixo" : "O marabaixo é uma dança tradicional da Amazônia, especialmente popular no estado do Amapá. Originada das influências africanas e indígenas, o marabaixo é caracterizado por seus ritmos contagiantes e passos vibrantes. Durante as festividades, grupos de dançarinos se reúnem para celebrar com trajes coloridos e instrumentos típicos, como tambores e maracás. O marabaixo não é apenas uma dança; é uma expressão cultural que une comunidades, preservando tradições e promovendo a alegria e a celebração da vida na Amazônia.",

  "Chico Mendes" : "Chico Mendes foi um líder seringueiro e ativista ambiental brasileiro, nascido no Acre em 1944. Ele se destacou na luta pela preservação da Amazônia e pelos direitos dos trabalhadores rurais, especialmente os seringueiros, que dependiam da extração de látex para sua subsistência. Mendes foi assassinado em 1988 por sua oposição ao desmatamento e à exploração predatória da floresta. Seu legado continua a inspirar movimentos ambientais e sociais em todo o mundo, simbolizando a resistência em defesa da Amazônia e dos povos que nela habitam.",

  "Dorothy Stang" : "Dorothy Stang foi uma missionária e ativista ambiental norte-americana, nascida em 1931. Ela dedicou sua vida à defesa dos direitos dos trabalhadores rurais e à preservação da Amazônia, especialmente na região do Pará. Stang se destacou por seu trabalho com comunidades camponesas, promovendo a agricultura sustentável e a educação ambiental. Em 2005, ela foi assassinada em um ataque encomendado por fazendeiros locais, o que gerou comoção internacional e destacou os conflitos agrários na Amazônia. Seu legado continua a inspirar a luta pela justiça social e ambiental na região.",

  "Raoni Metuktire" : "Raoni Metuktire é um líder indígena da etnia Kayapó, conhecido mundialmente por sua luta em defesa dos direitos dos povos indígenas e pela preservação da Amazônia. Nascido em 1932, Raoni se destacou como um defensor incansável da floresta, viajando pelo mundo para alertar sobre os perigos do desmatamento e das mudanças climáticas. Ele é um símbolo da resistência indígena e tem sido uma voz importante na luta por justiça social e ambiental, promovendo a conscientização sobre a importância da biodiversidade amazônica e os direitos dos povos nativos.",

  "Dona Onete" : "Dona Onete é uma renomada cantora e compositora paraense, conhecida como a 'Rainha do Carimbó Elétrico'. Nascida em 1933, ela começou sua carreira musical na década de 1970, mas ganhou notoriedade internacional apenas na década de 2010. Sua música mistura ritmos tradicionais da Amazônia, como o carimbó e o brega, com influências contemporâneas. Dona Onete é uma defensora da cultura amazônica e utiliza sua música para promover a identidade paraense, abordando temas como amor, natureza e a vida cotidiana na região.",

"Ajuricaba" : "Ajuricaba é uma figura lendária da história amazônica, considerado um herói indígena que resistiu à colonização portuguesa no século XVIII. Ele era um líder da tribo dos Manaus e é conhecido por sua bravura e resistência contra os invasores europeus. A lenda de Ajuricaba simboliza a luta dos povos indígenas pela liberdade e pela preservação de suas terras e culturas. Sua história é celebrada em várias manifestações culturais na Amazônia, refletindo a importância de sua figura como um símbolo de resistência e identidade indígena.",

"Dalcídio Jurandir" : "Dalcídio Jurandir foi um renomado escritor e poeta brasileiro, nascido em 1914 no estado do Pará. Ele é amplamente reconhecido por suas obras que retratam a vida e a cultura da Amazônia, explorando temas como a natureza exuberante, as tradições locais e as lutas sociais. Seu estilo literário é marcado por uma prosa rica e poética, que captura a essência da região amazônica. Dalcídio Jurandir é considerado um dos grandes nomes da literatura brasileira, contribuindo significativamente para a valorização da cultura amazônica através de sua escrita.",

"Cerâmica Marajoara" : "A cerâmica marajoara é uma das mais antigas e sofisticadas tradições de cerâmica indígena da Amazônia, originária da Ilha de Marajó, no Pará. Caracterizada por seus desenhos geométricos intrincados e formas elegantes, a cerâmica marajoara é feita principalmente de argila e decorada com pigmentos naturais. Os artefatos incluem urnas funerárias, potes e pratos, que eram usados em rituais e na vida cotidiana. A cerâmica marajoara é um testemunho da rica herança cultural dos povos indígenas da região e continua a ser valorizada tanto localmente quanto internacionalmente.",

"Biojoias" : "As biojoias amazônicas são peças de joalheria feitas a partir de materiais naturais encontrados na floresta, como sementes, madeiras, conchas e fibras vegetais. Essas joias refletem a rica biodiversidade da Amazônia e são frequentemente criadas por artesãos locais que utilizam técnicas tradicionais. As biojoias não apenas valorizam os recursos naturais da região, mas também promovem a sustentabilidade e a preservação ambiental. Além disso, elas representam a identidade cultural dos povos amazônicos, sendo uma forma de expressar a conexão com a natureza e as tradições locais.",

"Redes e Cestarias" : "As redes e cestarias amazônicas são artesanatos tradicionais que refletem a rica cultura e habilidades dos povos indígenas e ribeirinhos da região. As redes, feitas de fibras naturais como algodão, buriti ou tucumã, são utilizadas tanto para dormir quanto para pesca. Já as cestarias incluem uma variedade de objetos, como cestos, bolsas e utensílios, todos elaborados com técnicas ancestrais. Esses produtos não apenas representam a identidade cultural amazônica, mas também promovem a sustentabilidade, utilizando materiais locais e práticas que respeitam o meio ambiente.",

"Máscaras indígenas" : "As máscaras amazônicas são expressões artísticas e culturais que refletem a rica diversidade étnica da região. Feitas de materiais naturais como madeira, palha e tintas orgânicas, essas máscaras são frequentemente utilizadas em rituais, festivais e celebrações tradicionais. Elas representam espíritos, animais e figuras mitológicas, desempenhando um papel importante na preservação das tradições indígenas e na transmissão de histórias e valores culturais. As máscaras amazônicas são valorizadas tanto localmente quanto internacionalmente, sendo reconhecidas por sua beleza e significado cultural.",

"Tecelagem ribeirinha" : "A tecelagem ribeirinha é uma prática artesanal tradicional da Amazônia, onde comunidades ribeirinhas criam tecidos e produtos têxteis utilizando técnicas ancestrais. Feitas com fibras naturais como algodão, buriti e tucumã, as peças incluem tapetes, bolsas, roupas e acessórios. A tecelagem não apenas preserva as tradições culturais locais, mas também promove a sustentabilidade, utilizando recursos renováveis da floresta. Esses produtos são valorizados por sua beleza e funcionalidade, refletindo a rica herança cultural dos povos amazônicos.",

"Esculturas em madeira" : "As esculturas de madeira amazônicas são obras de arte criadas por artesãos locais, utilizando madeiras nativas da região, como o ipê, a castanheira e o mogno. Essas esculturas variam de figuras abstratas a representações de animais e seres mitológicos, refletindo a rica biodiversidade e as tradições culturais da Amazônia. Feitas com técnicas tradicionais, as esculturas não apenas valorizam os recursos naturais da floresta, mas também promovem a sustentabilidade e a preservação ambiental. Elas são apreciadas tanto localmente quanto internacionalmente por sua beleza e significado cultural.",

"Iara" : "A Iara, também conhecida como Mãe d'Água, é uma figura lendária do folclore amazônico, descrita como uma bela mulher com cauda de peixe. Ela habita os rios e igarapés da região, atraindo pescadores e viajantes com seu canto hipnotizante. Segundo a lenda, aqueles que se aproximam demais são seduzidos e levados para o fundo das águas, onde encontram sua perdição. A Iara simboliza a beleza e o perigo da natureza selvagem da Amazônia, refletindo o respeito e o temor que as comunidades ribeirinhas têm pelos mistérios dos rios.",

"Arara Azul" : "A arara-azul é uma das aves mais emblemáticas da Amazônia, conhecida por sua plumagem vibrante de azul intenso e amarelo. Essas aves são altamente sociais e vivem em bandos, frequentemente avistadas voando majestosas sobre as copas das árvores. A arara-azul desempenha um papel crucial na dispersão de sementes, ajudando a manter a saúde dos ecossistemas florestais. No entanto, a espécie enfrenta ameaças significativas devido à perda de habitat e ao tráfico ilegal de animais silvestres, tornando sua conservação uma prioridade para a preservação da biodiversidade amazônica.",












  
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



