const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const catalogo = document.getElementById('catalogo');

// 🎬 Catálogo com gêneros e detalhes
const filmes = [
  {
    titulo: "It: A Coisa",
    ano: 2017,
    genero: ["Terror","Mistério"],
    descricao: "Um grupo de crianças enfrenta uma entidade maligna que assume a forma de um palhaço aterrorizante.",
    imagem: "https://uauposters.com.br/media/catalog/product/1/1/111220180226-uau-posters-filmes-terror-it-a-coisa-palhaco.jpg",
    trailer: "https://www.youtube.com/embed/dD264ZjfKlk",
    duracao: "02h15min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
  {
    titulo: "Vingadores: Ultimato",
    ano: 2019,
    genero: ["Ação","Ficção Ciêntifica"],
    descricao: "Após o estalo de Thanos, os heróis remanescentes se unem para desfazer o caos e restaurar o equilíbrio do universo.",
    imagem: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    duracao: "03h01min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    ano: 2001,
    genero: ["Fantasia","Infantil"],
    descricao: "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuLCK9TStvVS3_MSFL1OTv6dd8g40tVtPiVWHfMU9hrEpiwgzZSr_L4kSsslgYHt3wfXDrrppkrHpfPWIkUnWdK4F_QiuWYS_SWK3Hecro_A&s=10",
    trailer: "https://www.youtube.com/embed/9fIObnIGMlI",
    duracao: "02h32min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/DJCTQ_-_10.svg/1024px-DJCTQ_-_10.svg.png"
  },
  {
    titulo: "Para todos os garotos que já amei",
    ano: 2018,
    genero: ["Romance","Comédia"],
    descricao: "Para Todos os Garotos que Já Amei acompanha Lara Jean, que escreve cartas secretas para os garotos por quem se apaixonou. Quando as cartas são enviadas sem sua permissão, ela faz um acordo com Peter, um dos destinatários, para fingirem um namoro. Com o tempo, sentimentos reais começam a surgir entre os dois.",
    imagem: "https://www.papodecinema.com.br/wp-content/uploads/2018/08/20180821-para-todos-os-garotos-que-ja-amei-papo-de-cinema-cartaz.webp",
    trailer: "https://www.youtube.com/embed/wwaPEbdu6o4",
    duracao: "01h39min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
  {
    titulo: "Continência ao Amor",
    ano: 2022,
    genero: "Romance",
    descricao: "Uma cantora se casa por conveniência com um militar que está prestes a ir para a guerra, mas uma tragédia transforma esse relacionamento de fachada em realidade.",
    imagem: "https://br.web.img3.acsta.net/pictures/22/08/09/21/09/3949781.jpg",
    trailer: "https://www.youtube.com/embed/2yyzb9RDUgs&t=7s",
    duracao: "02h02min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
  },
  {
    titulo: "A Cinco Passos de Você",
    ano: 2019,
    genero: ["Romance","Drama"],
    descricao: "Stella passa muito tempo no hospital por causa de uma fibrose cística. Lá, ela conhece Will, que sofre da mesma doença. Eles são obrigados a manter distância, mas mesmo assim se apaixonam.",
    imagem: "https://m.media-amazon.com/images/I/81Q11TuUR3L._AC_UF1000,1000_QL80_.jpg",
    trailer: "https://www.youtube.com/embed/Xf2c7kE39jE",
    duracao: "01h57min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
   {
    titulo: "Como Eu Era Antes de Você",
    ano: 2016,
    genero: ["Romance","Drama"],
    descricao: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
    imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/16/02/03/19/11/303307.jpg",
    trailer: "https://www.youtube.com/embed/PnqUs3xiAVI",
    duracao: "01h50min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
  {
    titulo: "A Culpa É das Estrelas",
    ano: 2014,
    genero: ["Romance","Comédia"],
    descricao: "Hazel Grace Lancaster e Augustus Waters são dois adolescentes que se conhecem em um grupo de apoio para pacientes com câncer. Por causa da doença, Hazel sempre descartou a ideia de se envolver amorosamente, mas acaba cedendo ao se apaixonar por Augustus. Juntos, eles viajam para Amsterdã, onde embarcam em uma jornada inesquecível.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/0/08/The_Fault_in_Our_Stars_%28filme%29.jpg",
    trailer: "https://www.youtube.com/embed/lFOOZJ1UChg",
    duracao: "02h06min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
   {
    titulo: "É Assim Que Acaba",
    ano: 2024,
    genero: ["Romance","Drama"],
    descricao: "Lily Bloom decide começar uma nova vida em Boston e tentar abrir o seu próprio negócio. Como consequência de sua mudança de vida, Lily acredita que encontrou o amor verdadeiro com Ryle, um charmoso neurocirurgião. No entanto, as coisas se complicam quando um incidente doloroso desencadeia um trauma do passado e também, quando seu primeiro amor reaparece.",
    imagem: "https://br.web.img3.acsta.net/c_310_420/img/61/b3/61b35aa40057cba4f7df23c689d6979e.PNG",
    trailer: "https://youtu.be/x4D3WHlquus",
    duracao: "02h10min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
  },
   {
    titulo: "O Rei Leão",
    ano: 2019,
    genero: ["Infantil","Aventura"],
    descricao: "Traído e exilado de seu reino, o leãozinho Simba precisa descobrir como crescer e retomar seu destino como herdeiro real nas planícies da savana africana.",
    imagem: "https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg",
    trailer: "https://www.youtube.com/embed/7TavVZMewpY",
    duracao: "02h00min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/DJCTQ_-_10.svg/1024px-DJCTQ_-_10.svg.png"
   },
   {
    titulo: "Homem-Aranha",
    ano: 2002,
    genero: ["Ação","Ficção Ciêntifica"],
    descricao: "Ao ser picado por uma aranha geneticamente modificada em uma demonstração científica, o jovem nerd Peter Parker ganha superpoderes. Inicialmente, ele pretende usá-los para ganhar dinheiro, adotando o nome de Homem-Aranha e se apresentando em lutas de exibição. Porém, ao presenciar o assassinato de seu tio Ben e sentir-se culpado, Peter decide não mais usar seus poderes para proveito próprio e sim para enfrentar o mal, tendo como seu primeiro grande desafio o psicótico Duende Verde.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/1/14/Spide-Man_Poster.jpg",
    trailer: "https://www.youtube.com/embed/t06RUxPbp_c",
    duracao: "02h06min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
   },
   {
    titulo: "Homem-Aranha 2",
    ano: 2004,
    genero: ["Ação","Ficção Ciêntifica"],
    descricao: "O Dr. Otto Octavius é transformado em Doutor Octopus quando uma falha em uma experiência de fusão nuclear resulta em uma explosão que mata sua esposa. Ele culpa o Homem-Aranha pelo acidente e deseja vingança. Enquanto isso, o alter ego do herói, Peter Parker, perde seus poderes. Para complicar as coisas, o seu melhor amigo odeia o Homem-Aranha e sua amada fica noiva.",
    imagem: "https://br.web.img2.acsta.net/pictures/210/544/21054460_2013103118041242.jpg",
    trailer: "https://www.youtube.com/embed/3jBFwltrxJw",
    duracao: "02h21min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
   },
   {
    titulo: "Homem-Aranha 3",
    ano: 2007,
    genero: ["Ação","Ficção Ciêntifica"],
    descricao: "O relacionamento entre Peter Parker e Mary Jane parece estar dando certo, mas outros problemas começam a surgir. A roupa de Homem-Aranha torna-se preta e acaba controlando Peter - apesar de aumentar seus poderes, ela revela e amplia o lado obscuro de sua personalidade. Com isso, os vilões Venom e Homem-Areia tentam destruir o herói.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/3/37/Spider-Man_3.jpg",
    trailer: "https://www.youtube.com/embed/e5wUilOeOmg",
    duracao: "02h24min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
   },
   {
    titulo: "Alerta Vermelho",
    ano: 2021,
    genero: ["Ação","Comédia"],
    descricao: "Um alerta vermelho da Interpol é emitido e o agente do FBI John Hartley assume o caso. Durante sua busca, ele se vê diante de um assalto ousado e é forçado a se aliar ao maior ladrão de arte da história, Nolan Booth, para capturar a ladra de arte mais procurada do mundo atualmente, Sarah Black.",
    imagem: "https://br.web.img2.acsta.net/pictures/21/10/28/20/55/0671708.jpg",
    trailer: "https://www.youtube.com/embed/5JQuYpBZarc",
    duracao: "01h58min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
   },
   {
    titulo: "Velozes & Furiosos",
    ano: 2001,
    genero: ["Ação","Crime"],
    descricao: "Brian O'Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado.",
    imagem: "https://cinema10.com.br/upload/featuredImage.php?url=https%3A%2F%2Fcinema10.com.br%2Fupload%2Ffilmes%2Ffilmes_1286_veloz1.jpg",
    trailer: "https://www.youtube.com/embed/DXc8tiB8TBI",
    duracao: "01h46min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
   },
   {
    titulo: "+ Velozes + Furiosos",
    ano: 2003,
    genero: ["Ação","Crime"],
    descricao: "O ex-policial Brian O'Conner se muda de Los Angeles para Miami para recomeçar sua vida. Ele acaba se envolvendo em rachas na sua nova cidade com seu amigo Tej e Suki. Suas aventuras terminam quando ele é preso e faz um acordo com agentes do FBI. Brian tem a missão muito perigosa de prender um poderoso chefe do cartel das drogas.",
    imagem: "https://m.media-amazon.com/images/S/pv-target-images/079cee602a97d0401a2e5a0b1ef59d752500ebf3399125cf561ac8e9badce5bc.jpg",
    trailer: "https://www.youtube.com/embed/ONs4_PtakGc",
    duracao: "01h47min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
   },
   {
    titulo: "Velozes & Furiosos: Desafio em Tóquio",
    ano: 2006,
    genero: ["Ação","Crime"],
    descricao: "Sean Boswell é um piloto de rua que desafia seu rival e bate o carro no fim da corrida. Ele decide se mudar para o Japão para evitar a prisão nos Estados Unidos, já que os rachas não são nada populares com as autoridades. Em Tóquio, ele começa a aprender um excitante e perigoso estilo novo de competir nas ruas. Só que os riscos ficam ainda mais altos quando Sean decide rivalizar com o campeão local e acaba se apaixonando pela namorada dele.",
    imagem: "https://cinemaweb.com.br/wp-content/uploads/2024/10/poster-velozes-e-furiosos-desafio-em-toquio-2006.jpg",
    trailer: "https://www.youtube.com/embed/dmeFOEcnTBU",
    duracao: "01h44min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
   },
   {
    titulo: "Velozes e Furiosos 4",
    ano: 2009,
    genero: ["Ação","Crime"],
    descricao: "Dominic Toretto descobre que sua amada Letty foi assassinada e resolve procurar pelo autor do crime. Enquanto isso, o agente Brian O'Conner está em busca de um traficante de drogas. Eles percebem que talvez estejam atrás da mesma pessoa.",
    imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/210/445/21044501_2013092621313492.jpg",
    trailer: "https://www.youtube.com/embed/3j3Mre4MsX4",
    duracao: "01h47min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
   },
   {
    titulo: "Velozes e Furiosos 5: Operação Rio",
    ano: 2011,
    genero: ["Ação","Crime"],
    descricao: "Desde que o ex-policial Brian O'Conner e Mia Toretto libertaram Dom da prisão, eles viajam pelo mundo para fugir das autoridades. No Rio de Janeiro, são obrigados a fazer um último trabalho antes de ganhar sua liberdade definitiva. Brian e Dom montam uma equipe de elite de pilotos de carro para executar a tarefa, mas precisam enfrentar um empresário corrupto e também um obstinado agente federal norte-americano.",
    imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/34/17/20028727.jpg",
    trailer: "https://www.youtube.com/embed/e4tEwEZYELc",
    duracao: "02h10min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
   },
   {
    titulo: "Velozes e Furiosos 6",
    ano: 2013,
    genero: ["Ação","Crime"],
    descricao: "Desde que o golpe de Dom e Brian no Rio de Janeiro deixou o grupo com 100 milhões de dólares, a equipe se espalhou pelo mundo.",
    imagem: "https://br.web.img3.acsta.net/medias/nmedia/18/92/81/46/20528636.jpg",
    trailer: "https://www.youtube.com/embed/W9o8V9ybbLo",
    duracao: "02h10min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
   },
   {
    titulo: "Velozes & Furiosos 7",
    ano: 2015,
    genero: ["Ação","Crime"],
    descricao: "Um agente oferece ajuda para cuidar de Shaw em troca do resgate de um ''hacker''. Dessa vez, não se trata apenas de velocidade: a corrida é pela sobrevivência.",
    imagem: "https://images.justwatch.com/poster/310008111/s718/velozes-e-furiosos-7.jpg",
    trailer: "https://www.youtube.com/embed/hujU0dw6Erk",
    duracao: "02h20min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
   },
   {
    titulo: "Velozes e Furiosos 8",
    ano: 2017,
    genero: ["Ação","Crime"],
    descricao: "Depois da aposentadoria de Brian e Mia, Dom e Letty aproveitam a lua de mel e levam uma vida pacata e normal. Mas a adrenalina do passado volta com tudo quando uma mulher misteriosa obriga Dom a retornar ao mundo do crime e da velocidade.",
    imagem: "https://m.media-amazon.com/images/M/MV5BODBiMjI5MjctYzU1Zi00ZjkwLTlhNzAtNTJkNTBjNTczMTkwXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/lKhS45mMQW0",
    duracao: "02h16min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
   },
   {
    titulo: "Velozes & Furiosos: Hobbs & Shaw",
    ano: 2019,
    genero: ["Ação","Crime"],
    descricao: "O corpulento policial Luke Hobbs se junta ao fora da lei Deckard Shaw para combater um terrorista geneticamente melhorado que tem força sobre-humana.",
    imagem: "https://m.media-amazon.com/images/S/pv-target-images/2684b14016933360cb27b750cc892814f18a98e756f67ebefcd7cb290806f462.jpg",
    trailer: "https://www.youtube.com/embed/lKhS45mMQW0",
    duracao: "02h16min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
   },
   {
    titulo: "Velozes e Furiosos 9",
    ano: 2021,
    genero: ["Ação","Crime"],
    descricao: "Dominic Toretto e Letty vivem uma vida pacata ao lado do filho. Mas eles logo são ameaçados pelo passado de Dom: seu irmão desaparecido Jakob, que retorna e está trabalhando ao lado de Cipher. Cabe a Dom reunir a equipe novamente para enfrentá-los.",
    imagem: "https://br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg",
    trailer: "https://www.youtube.com/embed/NnDGWyfP7q4",
    duracao: "02h23min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
   },
   {
    titulo: "Velozes e Furiosos 10",
    ano: 2023,
    genero: ["Ação","Crime"],
    descricao: "Dom Toretto e sua família precisam lidar com o adversário mais letal que já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado para destruir o mundo de Dom e todos que ele ama.",
    imagem: "https://m.media-amazon.com/images/S/pv-target-images/848a155842f8331062bd190b1584e3b152af0271468312ce6b0def838721592b.jpg",
    trailer: "https://www.youtube.com/embed/a1w9x5U88jU",
    duracao: "02h21min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
   },
   {
    titulo: "Toy Story 3",
    ano: 2010,
    genero: ["Infantil","Aventura"],
    descricao: "Com seu amado Andy se preparando para ir para a universidade, Woody, Buzz Lightyear e o restante dos brinquedos enfrentam o seu maior medo: serem esquecidos quando são colocados no sótão. Mas, por engano, acabam no meio-fio. Woody, o único escolhido para acompanhar Andy, percebe o erro e salva a gangue, mas os brinquedos acabam em uma creche. Lá, todos percebem que existe um lugar com brincadeiras infinitas, mas os pequenos são incontroláveis e Woody e sua turma decidem planejar uma grande fuga.",
    imagem: "https://wallpapers.com/images/hd/toy-story-3-film-poster-vggywxs6jyirpnl9.jpg",
    trailer: "https://www.youtube.com/embed/2BlMNH1QTeE",
    duracao: "01h43min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
  },
  {
    titulo: "Até o Último Homem",
    ano: 2016,
    genero: ["Guerra","Drama"],
    descricao: "Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens.",
    imagem: "https://br.web.img3.acsta.net/pictures/16/11/21/15/29/457312.jpg",
    trailer: "https://www.youtube.com/embed/4s4UCxCv_OE",
    duracao: "02h19min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
  {
    titulo: "Gente Grande",
    ano: 2010,
    genero: ["Comédia","Drama"],
    descricao: "A morte do treinador de basquete de infância de velhos amigos reúne a turma no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.",
    imagem: "https://br.web.img3.acsta.net/pictures/210/299/21029996_20130821205722213.jpg",
    trailer: "https://www.youtube.com/embed/HKVve_VSz58",
    duracao: "01h42min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
  {
    titulo: "Os Caça-Fantasmas",
    ano: 1984,
    genero: ["Terror","Comédia"],
    descricao: "Os parapsicologistas Egon Spengler, Raymond Stantz e Peter Venkman decidem abrir seu próprio negócio de caçadores de fantasmas quando um portal para uma outra dimensão é aberto em Nova York.",
    imagem: "https://www.papodecinema.com.br/wp-content/uploads/2016/07/20191219-poster.webp",
    trailer: "https://www.youtube.com/embed/oWs2l0CSBuY",
    duracao: "01h45min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
  },
  {
    titulo: "Piratas do Caribe: A Maldição do Pérola Negra",
    ano: 2003,
    genero: ["Aventura","Ação"],
    descricao: "O pirata Jack Sparrow tem seu navio saqueado e roubado pelo capitão Barbossa e sua tripulação. Com o navio de Sparrow, Barbossa invade a cidade de Port Royal, levando consigo Elizabeth Swann, filha do governador. Para recuperar sua embarcação, Sparrow recebe a ajuda de Will Turner, um grande amigo de Elizabeth. Eles desbravam os mares em direção à misteriosa Ilha da Morte, tentando impedir que os piratas-esqueleto derramem o sangue de Elizabeth para desfazer a maldição que os assola.",
    imagem: "https://br.web.img3.acsta.net/pictures/14/02/06/15/11/493568.jpg",
    trailer: "https://www.youtube.com/embed/Tkl9m7EMJ-w",
    duracao: "02h23min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
  },
  {
    titulo: "A Freira",
    ano: 2018,
    genero: ["Terror","Mistério"],
    descricao: "Presa em um convento na Romênia, uma freira comete suicídio. Para investigar o caso, o Vaticano envia um padre assombrado e uma noviça prestes a se tornar freira. Arriscando suas vidas, a fé e até suas almas, os dois descobrem um segredo profano e se confrontam com uma força do mal que toma a forma de uma freira demoníaca e transforma o convento em um campo de batalha.",
    imagem: "https://br.web.img3.acsta.net/pictures/18/07/18/21/53/1348208.jpg",
    trailer: "https://www.youtube.com/embed/4V44ew-laC4",
    duracao: "01h36min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
  },
  {
    titulo: "Annabelle",
    ano: 2014,
    genero: ["Terror","Mistério"],
    descricao: "John Form acha que encontrou o presente ideal para sua esposa grávida, uma boneca vintage. No entanto, a alegria do casal não dura muito. Uma noite terrível, membros de uma seita satânica invadem a casa do casal em um ataque violento. Ao tentarem invocar um demônio, eles mancham a boneca de sangue, tornando-a receptora de uma entidade do mal.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/9/9b/Annabelle-poster.jpg",
    trailer: "https://www.youtube.com/embed/kHl6aU30pIo",
    duracao: "01h39min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
    {
    titulo: "Up: Altas Aventuras",
    ano: 2009,
    genero: ["Infantil","Aventura"],
    descricao: "Carl Fredricksen é um vendedor de balões que, aos 78 anos, está prestes a perder a casa em que sempre viveu com sua esposa, a falecida Ellie. Após um incidente, Carl é considerado uma ameaça pública e forçado a ser internado. Para evitar que isto aconteça, ele põe balões em sua casa, fazendo com que ela levante voo. Carl quer viajar para uma floresta na América do Sul, onde ele e Ellie sempre desejaram morar, mas descobre que um problema embarcou junto: Russell, um menino de 8 anos.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/a/a8/Up_p%C3%B4ster.jpg",
    trailer: "https://www.youtube.com/embed/HWEW_qTLSEE",
    duracao: "01h35min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
  },
   {
    titulo: "As Branquelas",
    ano: 2004,
    genero: ["Comédia","Crime"],
    descricao: "Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas. Como castigo, eles são forçados a escoltar um par de socialites nos Hamptons. Quando as meninas descobrem o plano da agência, elas se recusam a ir. Sem opções, Marcus e Kevin, dois homens negros, decidem fingir que são as irmãs e se transformam em um par de loiras.",
    imagem: "https://www.cinebelasartes.com.br/wp-content/uploads/2018/06/as-branquelas-min.jpg",
    trailer: "https://www.youtube.com/embed/aeVkbNka9HM",
    duracao: "01h49min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
  },
   {
    titulo: "O Pequenino",
    ano: 2006,
    genero: ["Comédia","Crime"],
    descricao: "O anão Calvin mal saiu da prisão e já planeja um novo assalto a uma joalheria. Perseguido pela polícia, ele esconde o diamante na bolsa de Vanessa, cujo marido, Darryl, sonha em ter um filho. Aproveitando a oportunidade para recuperar a pedra, Calvin se veste como criança e é deixado em frente à casa de Darryl para que seja acolhido. O casal passa um final de semana com o pequeno e decide adotá-lo, acreditando ser um bebê abandonado.",
    imagem: "https://br.web.img3.acsta.net/pictures/210/364/21036473_20130905212653924.jpg",
    trailer: "https://www.youtube.com/embed/n6ir-qPI2PU",
    duracao: "01h38min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
   {
    titulo: "O Grinch",
    ano: 2000,
    genero: ["Comédia","Infantil"],
    descricao: "O rabugento Grinch faz de tudo para acabar com o Natal dos cidadãos de Quemlândia. Seu plano é roubar das pessoas tudo que tenha ligação com a data, até que a menina Cindy Lou Who resolve ficar amiga dele.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/a/a5/How_Grinch_Stole_Christmas.jpg",
    trailer: "https://www.youtube.com/embed/M-aUM-C7f2M",
    duracao: "01h45min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
  },
   {
    titulo: "Minha Mãe é Uma Peça",
    ano: 2013,
    genero: "Comédia",
    descricao: "Dona Hermínia é uma senhora de meia-idade, divorciada do marido, que a trocou por uma mulher mais jovem. Hiperativa, ela não larga do pé de seus filhos, Marcelina e Juliano. Um dia, após descobrir que eles a consideram chata, ela resolve sair de casa sem avisar ninguém, deixando todos preocupados. Dona Hermínia decide visitar a querida tia Zélia para desabafar suas tristezas atuais e recordar os bons tempos do passado.",
    imagem: "https://s2-gshow.glbimg.com/69hgldLhh41ohw9k_OK8OfDg2kg=/0x0:4870x7246/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2023/H/Q/LByV0JTKqhRi9CxZlUHw/mmeup-0001-cartaz-5mb-04-om-1-.jpg",
    trailer: "https://www.youtube.com/embed/HrST-4WLlbA",
    duracao: "01h24min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
  {
    titulo: "Tropa de Elite",
    ano: 2007,
    genero: ["Ação","Crime"],
    descricao: "Nascimento, capitão da tropa de elite do Rio de Janeiro, é escolhido para chefiar uma das equipes cuja missão é apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação, os dois se candidatam ao curso de formação do Batalhão de Operações Policiais Especiais.",
    imagem: "https://m.media-amazon.com/images/M/MV5BNjA4NTM4MzUtZGQ3NS00ZDIxLWJiYjYtNjU5OWMzYWE1OTFjXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/uZBiNJQxtGw",
    duracao: "01h55min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
  {
    titulo: "Tropa de Elite 2",
    ano: 2010,
    genero: ["Ação","Crime"],
    descricao: "Depois de uma operação fracassada, Nascimento é afastado do Bope e agora trabalha como subsecretário de Inteligência na Secretaria de Segurança Pública do Rio de Janeiro. No novo cargo, o ex-capitão é arrastado para uma disputa política sangrenta que envolve funcionários do governo e grupos paramilitares.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/e/ed/Tropa_de_Elite_2.jpg",
    trailer: "https://www.youtube.com/embed/-JbE6rjjyD8",
    duracao: "01h55min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
  {
    titulo: "Gigantes de Aço",
    ano: 2011,
    genero: ["Ação","Ficção Ciêntifica"],
    descricao: "Em um futuro próximo, as máquinas substituem os homens no ringue. As lutas de boxe acontecem entre robôs de alta tecnologia. Charlie, um ex-lutador frustrado, decide se juntar ao filho para construir um competidor imbatível.",
    imagem: "https://play-lh.googleusercontent.com/406tOqgAJOoiVpckN-6DJzcHD8Ed0N6kWs90bUmUOSF1nPu1-hPF2kvxNufJndQkRt59",
    trailer: "https://www.youtube.com/embed/SwfmV3nn6QA",
    duracao: "02h07min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/DJCTQ_-_10.svg/1024px-DJCTQ_-_10.svg.png"
  },
  {
    titulo: "Karate Kid",
    ano: 2010,
    genero: ["Ação","Infantil"],
    descricao: "Um garoto de 12 anos chamado Dre Parker se muda para a China com a mãe e se vê em um terra estranha. Ele sabe um pouco de caratê, mas suas habilidades não são o bastante para enfrentar o valentão da escola, Cheng. Dre faz amizade com o Sr. Han, um mestre das artes marciais, que lhe ensina os segredos do kung fu na esperança de que o garoto possa derrotar Cheng e, quem sabe, conquistar o coração da linda Mei Ying.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/0/00/The_Karate_Kid_2010.jpg",
    trailer: "https://www.youtube.com/embed/XY8amUImEu0",
    duracao: "02h20min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/DJCTQ_-_10.svg/1024px-DJCTQ_-_10.svg.png"
  },
  {
    titulo: "Irmã Morte",
    ano: 2023,
    genero: ["Terror","Mistério"],
    descricao: "Narcisa, jovem noviça com poderes sobrenaturais, chega a uma escola para garotas para ser professora. O local é um antigo convento cheio de segredos aterrorizantes. Conforme os dias passam, ela fica cada vez mais perto de desvendar os acontecimentos estranhos e perturbadores que atormentam a todos.",
    imagem: "https://br.web.img3.acsta.net/pictures/23/10/02/13/10/4478170.png",
    trailer: "https://www.youtube.com/embed/9ta8zVcO0FQ",
    duracao: "01h31min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
  {
    titulo: "It - Capítulo Dois",
    ano: 2019,
    genero: ["Terror","Mistério"],
    descricao: "Vinte e sete anos depois dos eventos que chocaram os adolescentes que faziam parte do Clube dos Perdedores, os amigos realizam uma reunião. No entanto, o reencontro se torna uma verdadeira e sangrenta batalha quando Pennywise, o palhaço, retorna.",
    imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/19/08/14/16/00/5320567.jpg",
    trailer: "https://www.youtube.com/embed/h6FzEp2FLPo",
    duracao: "02h49min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
  {
    titulo: "Brinquedo Assassino",
    ano: 1988,
    genero: ["Terror","Mistério","Suspense"],
    descricao: "Uma mulher compra para seu filho um boneco amaldiçoado por um assassino em série morto dentro uma loja de brinquedos. Pouco antes, ele faz um ritual de vodu com o boneco, que ganha vida e se torna um perigoso psicopata.",
    imagem: "https://br.web.img2.acsta.net/pictures/14/10/10/18/18/494547.jpg",
    trailer: "https://www.youtube.com/embed/6HqSAtciV3U",
    duracao: "01h27min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
  {
    titulo: "Shrek",
    ano: 2001,
    genero: ["Fantasia","Comédia"],
    descricao: "Um ogro tem sua vida invadida por personagens de contos de fadas que acabam com a tranquilidade de seu lar. Ele faz um acordo pra resgatar uma princesa.",
    imagem: "https://play-lh.googleusercontent.com/yyk9c52Ql7jHHa_Rjtw7nZ_S_JIdMMSv2VPgZd2K8k1meHw6aYQ80YOUzoztqKHqbaE=w240-h480-rw",
    trailer: "https://www.youtube.com/embed/CwXOrWvPBPk",
    duracao: "01h29min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
  },
  {
    titulo: "Lúcifer",
    ano: 2016,
    genero: ["Drama","Série"],
    descricao: "Entediado com a vida nas trevas, Lucifer se muda para Los Angeles, abre um bar e faz amizade com uma investigadora da polícia.",
    imagem: "https://preview.redd.it/what-do-you-think-of-the-lucifer-series-v0-nqoyrp660x6f1.png?width=640&crop=smart&auto=webp&s=1f83c16ce31ca74139d039a09d41d4c2b2cbccf7",
    trailer: "https://www.youtube.com/embed/X4bF_quwNtw",
    duracao: "6 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
  },
{
    titulo: "Brooklyn Nine Nine",
    ano: 2013,
    genero: ["Comédia","Crime","Ação","Drama","Série"],
    descricao: "Jake Peralta é um detetive brilhante e ao mesmo tempo imaturo, que nunca precisou se preocupar em respeitar as regras. Tudo muda quando um capitão exigente assume o comando de seu esquadrão e Jake deve aprender a trabalhar em equipe.",
    imagem: "https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/i69rgj0s9fw",
    duracao: "8 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
  },
{
titulo: "Stranger Things",
    ano: 2016,
    genero: ["Terror","Série"],
    descricao: "Na década de 1980, um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.",
    imagem: "https://m.media-amazon.com/images/I/71+05bXxNAL._AC_UF1000,1000_QL80_.jpg",
    trailer: "https://www.youtube.com/embed/mnd7sFt5c3A",
    duracao: "5 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
  },
{
titulo: "Supernatural",
    ano: 2005,
    genero: ["Drama","Série"],
    descricao: "Os irmãos Sam e Dean Winchester encaram cenários sinistros caçando monstros, mas velhos truques, armas e esconderijos não funcionam mais. Traídos pelos amigos, os irmãos precisam colaborar enquanto enfrentam novos inimigos.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/0/0f/Supernatural-Primeira_Temporada_%28Blu-ray%29.jpg",
    trailer: "https://www.youtube.com/embed/31A0DqX6jHI",
    duracao: "15 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
  },
{
titulo: "Deadpool",
    ano: 2016,
    genero: ["Comédia","Ação"],
    descricao: "Wade Wilson é um ex-agente especial que passou a trabalhar como mercenário. Seu mundo é destruído quando um cientista maligno o tortura e o desfigura completamente. O experimento brutal transforma Wade em Deadpool, que ganha poderes especiais de cura e uma força aprimorada. Com a ajuda de aliados poderosos e um senso de humor mais desbocado e cínico do que nunca, o irreverente anti-herói usa habilidades e métodos violentos para se vingar do homem que quase acabou com a sua vida.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/250px-Deadpool_%282016_poster%29.png",
    trailer: "https://www.youtube.com/embed/Xithigfg7dA",
    duracao: "01h48min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
{
titulo: "YOU",
    ano: 2018,
    genero: ["Suspense","Romance","Série"],
    descricao: "Obsessivo e mortalmente charmoso, Joe vai ao extremo para entrar na vida de quem o fascina. Por trás de seus modos gentis, há uma fúria assassina e um passado perturbador.",
    imagem: "https://br.web.img3.acsta.net/pictures/18/12/31/02/49/2373131.jpg",
    trailer: "https://www.youtube.com/embed/mNkyrdzzWok",
    duracao: "5 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/2/2a/DJCTQ_-_18.svg"
  },
{
titulo: "Clube Da Luta",
    ano: 1999,
    genero: ["Ação","Crime"],
    descricao: "Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.",
    imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/96/20122166.jpg",
    trailer: "https://www.youtube.com/embed/Fs0-4NLSO2Y",
    duracao: "02h19min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/2/2a/DJCTQ_-_18.svg"
  },
{
titulo: "Manual de Assasinato para Boas Garotas",
    ano: 2024,
    genero: ["Suspense","Mistério","Terror","Drama","Série"],
    descricao: "Uma estudante investiga o caso da morte de uma adolescente de 17 anos de uma cidadezinha pacata. Ela arrisca tudo, até mesmo sua própria vida, para expor a verdade.",
    imagem: "https://br.web.img2.acsta.net/img/fa/b3/fab3c80fbbc22961d9e45d66e6fef508.jpg",
    trailer: "https://www.youtube.com/embed/38EHhWc5-uM",
    duracao: "1 temporada",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
{
titulo: "Riverdele",
    ano: 2017,
    genero: ["Drama","Romance","Suspense","Série"],
    descricao: "Archie Andrews e seu grupo de amigos fazem o que podem para lidar com a escola, os dramas familiares e os misteriosos crimes que ameaçam sua pacata cidade suburbana.",
    imagem: "https://br.web.img2.acsta.net/pictures/18/09/06/10/23/3151996.jpg",
    trailer: "https://www.youtube.com/embed/HxtLlByaYTc",
    duracao: "7 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/2048px-DJCTQ_-_14.svg.png"
  },
{
titulo: "Arcane",
    ano: 2021,
    genero: ["Aventura","Série"],
    descricao: "Arcane é uma série de animação da Netflix que adapta o universo do jogo League of Legends, focando no conflito entre as cidades de Piltover e Zaun e na história das irmãs Vi e Jinx",
    imagem: "https://m.media-amazon.com/images/M/MV5BYjA2NzhlMDItNWRmZC00MzRjLWE3ZjAtZjBlZDAwOWY2ODdjXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/3MB3OK3Xnvs",
    duracao: "2 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
{
titulo: "The Umbrella Academy",
    ano: 2019,
    genero: ["Drama","Série"],
    descricao: "Irmãos com poderes extraordinários se reúnem depois de passar muito tempo afastados e descobrem surpreendentes segredos de família. A família enfrenta viagens no tempo, assassinos e o fim do mundo.",
    imagem: "https://br.web.img2.acsta.net/c_310_420/pictures/18/12/10/14/01/0178829.jpg",
    trailer: "https://www.youtube.com/embed/0DAmWHxeoKw",
    duracao: "4 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
{
titulo: "Insatiable",
    ano: 2018,
    genero: ["Drama","Série"],
    descricao: "Uma garota encontra nos concursos de beleza sua chance de se vingar do bullying que sofreu. Ela conta com a ajuda de um advogado, mas os dois logo veem a situação sair de controle.",
    imagem: "https://br.web.img2.acsta.net/c_310_420/pictures/18/07/23/11/38/1675928.jpg",
    trailer: "https://www.youtube.com/embed/z-81WVD8xTs",
    duracao: "2 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
{
titulo: "Yellowjackets",
    ano: 2021,
    genero: ["Suspense","Terror","Mistério","Aventura","Série"],
    descrição: "Yellowjackets é uma série de suspense e drama que conta a história de um time de futebol feminino do ensino médio que sobrevive a um acidente de avião em 1996 e precisa lutar para sobreviver em uma floresta remota por 19 meses",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_828895-MLB69089966999_042023-O.webp",
    trailer: "https://www.youtube.com/embed/SNKQzz5bPLI",
    duracao: "3 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
{
titulo: "O Mundo Sombrio de Sabrina",
    ano: 2018,
    genero: ["Terror","Suspense","Mistério","Aventura","Série"],
    descricao: "Sabrina Spellman luta com sua natureza dupla - metade bruxa, metade mortal - enquanto se levanta contra as forças do mal que a ameaçam, sua família e o mundo humano.",
    imagem: "https://br.web.img2.acsta.net/pictures/19/03/22/14/57/3269910.jpg",
    trailer: "https://www.youtube.com/embed/_g8djuDkpBc",
    duracao: "4 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
{
titulo: "O Telefone preto",
    ano: 2021,
    genero: ["Suspense","Terror","Ação","Mistério","Drama"],
    descricao: "O Telefone Preto descreve um filme de terror e suspense de 2022 sobre um garoto sequestrado por um serial killer e mantido em um porão à prova de som",
    imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg",
    trailer: "https://www.youtube.com/embed/dCAbPQnFAU4",
    duracao: "01h42min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/2048px-DJCTQ_-_16.svg.png"
  },
{
titulo: "Wicked",
    ano: 2024,
    genero: "Fantasia",
    descricao: "Na Terra de Oz, uma jovem chamada Elphaba forma uma improvável amizade com uma estudante popular chamada Glinda. Após um encontro com o Mágico de Oz, o relacionamento delas logo chega a uma encruzilhada",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/74/Wicked_2024_poster.png",
    trailer: "https://www.youtube.com/embed/6COmYeLsz4c",
    duracao: "02h40min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/DJCTQ_-_10.svg/1024px-DJCTQ_-_10.svg.png"
  },
{
titulo: "Lilo & Stich",
    ano: 2002,
    genero: ["Infantil","Comédia"],
    descricao: "Lilo é uma garota que adora cuidar de animais menos favorecidos. Lilo tem o costume de coletar lixo reciclável nas praias para, com o dinheiro recebido, comprar comida para peixes. Até que, em um belo dia, ela encontra um cachorro e decide adotá-lo. Entretanto, este cachorro na verdade é Stitch, um ser alienígena que é um dos criminosos mais perigosos da galáxia. Agora, Stitch esconde quatro de suas seis pernas e decide se fazer passar por um cachorro comum, ficando amigo de Lilo.",
    imagem: "https://br.web.img2.acsta.net/medias/nmedia/18/90/89/85/20119071.jpg",
    trailer: "https://www.youtube.com/embed/9OAC55UWAQs",
    duracao: "01h25min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
  },
{
titulo: "Super Mario Bros",
    ano: 2023,
    genero: ["Infantil","Comédia"],
    descricao: "Mario e seu irmão Luigi são encanadores do Brooklyn, em Nova York. Um dia, eles vão parar no reino dos cogumelos, governado pela Princesa Peach. O local é ameaçado por Bowser, rei dos Koopas, que faz de tudo para conseguir reinar em todos os lugares.",
    imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/super-mario-bros/b7bd9bb8-f131-44dd-8082-667078bf2b22.jpg",
    trailer: "https://www.youtube.com/embed/Cb4WV4aXBpk",
    duracao: "01h32min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
  },
{
titulo: "One Piece",
    ano: 1999,
    genero: ["Aventura","Anime"],
    descricao: "Monkey D. Luffy e sua tripulação de Piratas do Chapéu de Palha embarcam em uma jornada incrível para encontrar um tesouro lendário, o One Piece.",
    imagem: "https://br.web.img3.acsta.net/pictures/16/02/03/17/11/571106.jpg",
    trailer: "https://www.youtube.com/embed/La2ZpdIP30U",
    duracao: "20 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
{
titulo: "Naruto Shippuden",
    ano: 2007,
    genero: ["Ação","Anime"],
    descricao: "Depois de dois anos e meio de treinamento duro com Jiraiya, Naruto retorna a Konoha para se reconectar com seus velhos amigos e viver novas aventuras. Desta vez, eles contam com a ajuda de Sai, um novo aliado que tem o poder de dar vida a tudo o que desenha.",
    imagem: "https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/embed/tpUslbsyPU8",
    duracao: "21 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
{
titulo: "AVATAR - FOGO E CINZAS",
    ano: 2025,
    genero: ["Ação","Fantasia"],
    descricao: "Avatar: Fogo e Cinzas é o terceiro filme da saga de James Cameron e mostra Jake Sully e Neytiri enfrentando uma nova e violenta tribo Na'vi conhecida como o Povo das Cinzas, liderada por Varang",
    imagem: "https://br.web.img2.acsta.net/img/d0/a1/d0a178dfb53053c71b2e157e313386d1.jpg",
    trailer: "https://www.youtube.com/embed/_d-gYzzN72o",
    duracao: "03h12min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
},
{
titulo: "Hotel Transilvânia",
    ano: 2012,
    genero: ["Infantil","Comédia"],
    descricao: "O Hotel Transilvânia é um resort cinco estrelas que serve de refúgio para que os monstros possam descansar do árduo trabalho de perseguir e assustar os humanos. O local é comandado pelo Conde Drácula, que resolve convidar os amigos para comemorar, ao longo de um fim de semana, o 118º aniversário de sua filha Mavis. Ele só não espera a chegada de um humano sem noção chamado Jonathan, que aparece no local justo quando o hotel está repleto de convidados e, ainda por cima, se apaixona por Mavis.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/b/b8/Hotel_Transylvania.jpg",
    trailer: "https://www.youtube.com/embed/WtyiO4ZpbmM",
    duracao: "01h31min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
  },
{
titulo: "F1",
    ano: 2025,
    genero: ["Esporte","Ação"],
    descricao: "O filme de Fórmula 1 com Brad Pitt, F1: O Filme, é um drama esportivo sobre o piloto aposentado Sonny Hayes (Brad Pitt), que é convencido a voltar às pistas como mentor de um jovem novato, Joshua Pearce (Damson Idris), na equipe Apex GP. O longa acompanha a rivalidade e a parceria entre os dois, que precisam trabalhar juntos para alcançar a vitória, enquanto o filme retrata a adrenalina e os bastidores do esporte. ",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/c/c1/F1.webp",
    trailer: "https://www.youtube.com/embed/ZiDphkXCZsQ",
    duracao: "02h35min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
{
titulo: "Ponyo: Uma Amizade que Veio do Mar",
    ano: 2008,
    genero: ["Fantasia","Aventura"],
    descricao: "O garoto Sousuke encontra um peixinho dourado preso em uma garrafa e decide libertá-lo, sem saber que se trata da deusa do mar Ponyo. Filha de um poderoso mago, ela se comove com a atitude do menino e usa a magia do pai para se transformar em humana. Dessa forma, acredita poder fortalecer a amizade com Sousuke. Porém, a substância de sua poção mágica pode colocar em risco o vilarejo onde mora o menino.",
    imagem: "https://m.media-amazon.com/images/I/71hk5jWXAOL._AC_UF1000,1000_QL80_.jpg",
    trailer: "https://www.youtube.com/embed/h6XP82TyFWw",
    duracao: "01h43min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
  },
{
titulo: "Zootopia 2",
    ano:2025,
    genero: ["Animação", "Comédia"],
    descricao: "Em Zootopia 2, os detetives Judy Hopps e Nick Wilde precisam desvendar um mistério envolvendo um réptil que chega à cidade e causa confusão, o que os leva a explorar novas e inesperadas partes da metrópole e a testar sua parceria",
    imagem: "https://lumiere-a.akamaihd.net/v1/images/nest_instagram_teaser2_poster_brazil_75c497e5.jpeg",
    trailer: "https://www.youtube.com/embed/_UmBPK3D6X4",
    duracao: "01h48min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
  },
{
titulo: "A Fantástica Fábrica de Chocolate",
    ano: 2005,
    genero: ["Fantasia","Infantil"],
    descricao: "O jovem Charlie Bucket e seu avô Joe se juntam a um pequeno grupo de ganhadores de uma competição, os quais vão para um passeio na mágica e misteriosa fábrica do excêntrico Willy Wonka. Ajudado por seus anões trabalhadores, Wonka esconde uma surpresa para eles durante o passeio.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/31/Charlie_and_the_Chocolate_Factory.jpg/250px-Charlie_and_the_Chocolate_Factory.jpg",
    trailer: "https://www.youtube.com/embed/beurNg4DGm0",
    duracao: "01h55min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/2048px-DJCTQ_-_L.svg.png"
  },
{
titulo: "Gente Grande 2",
    ano: 2013,
    genero: "Comédia",
    descricao: "Lenny Feder e a família se mudam para a própria cidade natal com o objetivo ficarem perto dos amigos, mas acabam tendo que enfrentar alguns fantasmas do passado, como a covardia diante de valentões e o famigerado bullying na escola.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/d/d6/Grown_Ups.jpg",
    trailer: "https://www.youtube.com/embed/U4IVNvPu134",
    duracao: "01h41min",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
{
titulo: "Friends",
    ano: 1994,
    genero: ["Drama","Comédia","Série"],
    descricao: "Rachel, Monica, Phoebe, Joey, Chandler e Ross são seis amigos que vivem em Nova York. Eles encaram problemas cotidianos e encontros e desencontros amorosos com bom humor. Nas horas vagas, adoram frequentar a cafeteria Central Perk.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/a/a0/Friends_1%C2%AA_temporada.jpg",
    trailer: "https://www.youtube.com/embed/QdQ58BbGRsA",
    duracao: "10 temporadas",
    classificacao: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg"
  },
  
];

// Agrupar filmes por gênero
function agruparPorGenero(lista) {
  const grupos = {};

  lista.forEach(filme => {
    const generos = Array.isArray(filme.genero) ? filme.genero : [filme.genero];

    generos.forEach(g => {
      if (!grupos[g]) grupos[g] = [];
      grupos[g].push(filme);
    });
  });

  return grupos;
}

// Mostrar filmes
function mostrarFilmes(lista) {
  const grupos = agruparPorGenero(lista);
  catalogo.innerHTML = Object.keys(grupos).map(genero => `
    <section class="genero">
      <h2>${genero}</h2>
      <div class="lista-filmes">
        ${grupos[genero].map((filme, i) => `
          <div class="filme" data-index="${filmes.indexOf(filme)}">
            <img src="${filme.imagem}" alt="${filme.titulo}">
            <h3>${filme.titulo}</h3>
            <p>(${filme.ano})</p>
          </div>
        `).join('')}
      </div>
    </section>
  `).join('');

  // adiciona eventos de clique
  document.querySelectorAll('.filme').forEach(el => {
    el.addEventListener('click', () => {
      const index = el.getAttribute('data-index');
      abrirModal(filmes[index]);
    });
  });
}

mostrarFilmes(filmes);

// 🔍 Busca
searchInput.addEventListener('input', () => {
  const termo = searchInput.value.toLowerCase().trim();
  const filtrados = filmes.filter(f => {
  const tituloMatch = f.titulo.toLowerCase().includes(termo);

  // Garante que o gênero funciona mesmo sendo array ou string
  const generos = Array.isArray(f.genero) ? f.genero : [f.genero];
  const generoMatch = generos.some(g => g.toLowerCase().includes(termo));

  return tituloMatch || generoMatch;
});
  mostrarFilmes(filtrados);
});

// ❌ Botão limpar
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  mostrarFilmes(filmes);
  searchInput.focus();
});

// ===== MODAL =====
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

function abrirModal(filme) {
  document.getElementById('modalPoster').src = filme.imagem;
  document.getElementById('modalTitulo').textContent = filme.titulo;
  document.getElementById('modalAno').textContent = `Ano: ${filme.ano}`;
  document.getElementById('modalGenero').textContent = `Gênero: ${Array.isArray(filme.genero) ? filme.genero.join(", ") : filme.genero}`;
  document.getElementById('modalDescricao').textContent = filme.descricao;
  document.getElementById('duracao').textContent = `Duração: ${filme.duracao}`;
  const classificacaoImg = document.getElementById('modalClassificacao');
  if (filme.classificacao) {
    classificacaoImg.src = filme.classificacao;
    classificacaoImg.style.display = "block";
  } else {
    classificacaoImg.style.display = "none";
  }
  document.getElementById('modalTrailer').src = filme.trailer + "?autoplay=1";
  modal.style.display = "flex";
}

closeModal.addEventListener('click', fecharModal);

function fecharModal() {
  modal.style.display = "none";
  document.getElementById('modalTrailer').src = ""; // pausa o vídeo
}

window.addEventListener('click', e => {
  if (e.target === modal) fecharModal();
});
