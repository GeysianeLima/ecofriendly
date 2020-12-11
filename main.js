//Variáveis da fase1
let img, bgFase1, lata1, lata2, lata3, lata4, imginstru, imgcred, imgsobre, setaVoltar, dados, derrota, acerto, aviso1, aviso2, aviso3, aviso4, lixosdentro1, jogarClaro,instruClaro, credClaro, sobreClaro, alternFundo;

//Variáveis de fundo da troca de nivel fase 1
let fundoN1, fundoN2, fundoN3, fundoN4, fundoN5, fundoN6;


//Variáveis dos caminhões fase 1
let caminhao_vermelho, caminhao_amarelo, caminhao_verde, caminhao_azul, camY;

//Variáveis dos lixos fase 1

camY = 350; //Variável que armazena a posição Y do caminhão
let lixoY; //Armazena a posição Y do lixo que apareci na pista
let lixoX = 3680; //Armazena a posição X do lixo que apareci na pista
let lixoaleatorio; //Usada na função sorteio

//Variáveis audio fase 1
let audioclick, audiofase1, audioacerto, audioerro, passanivel;


//Vetor de armazenar as imagens dos lixos fase 1
let lixo = [];

let nomeLixo = [0, 'Bola', 'Canudo', 'Cartões', 'Copo descartável', 'Garrafa', 'Garrafa', 'Pente', 'Pregador', 'Sacola', 'Sacola', 'Algemas', 'Alicate', 'Balde', 'Cadeado', 'Chave', 'Lata', 'Martelo', 'Pregos', 'Garfo e faca', 'Tesoura', 'Copo', 'Garrafa', 'Garrafa', 'Garrafa', 'Janela', 'Lupa', 'Óculos', 'Copo', 'Taça', 'Vidro quebrado', 'Bloco de notas', 'Pipa', 'Cartas', 'Jornal', 'Origami', 'Origami', 'Folha', 'Papel', 'Papel higiênico', 'Pergaminho'];

// Deixa a tela inicial como padrão
let tela = 0;

//Variáveis da fase 1, niel, pontos e vida
let nivel = 1;

let vida = 3;

let pontos = 0

//Variaveis da fase 2 quiz
let quiztela, quiz1, quiz2;

let pergunta = 1;

let perguntaAleatoria;

let perguntas = [0, 'Qual a cor do lixo destinado ao plástico?', 'Qual o lixo destinado ao papel?', 'Qual a cor do lixo destinado ao metal?', 'Qual a cor do lixo destinado ao vidro?', 'Marcos terminou de beber seu suco de laranja. Onde ele deve jogar fora a garrafa de vidro?', 'Juvenal encontrou uma caixa de papelão vazia na rua e decidiu joga-la no lixo. Qual a cor do lixo que ele deve jogar o papelão?', 'Maria quer jogar uma casca de laranja fora. Qual a cor correta do lixo em que deve jogar?', 'Qual a cor do lixo destinado à madeira?', 'Escolha a cor que corresponde corretamente aos objetos:', 'Qual objeto NÃO devemos jogar no lixo amarelo?'];

let respostas = [0, 'Vermelho', 'Azul', 'Amarelo', 'Verde', 'No lixo verde', 'Azul', 'Marrom', 'Preto', 'Lata de refrigerante-Amarelo', 'Caneta azul'];



//vetor que armazena as alternativa
let alternativas = [0, 'Laranja', 'Verde', 'Vermelho', 'Azul', 'Verde', 'Azul', 'Amarelo', 'Vermelho', 'Marrom', 'Vermelho', 'Azul', 'Amarelo', 'Branco', 'Azul', 'Verde', 'Amarelo', 'No chão', 'No lixo azul', 'No lixo verde', 'No lixo vermelho', 'Azul', 'Amarelo', 'Preto', 'Verde', 'Amarelo', 'Roxo', 'Vermelho', 'Marrom', 'Preto', 'Marrom', 'Azul', 'Verde', 'Garrafa de vidro-vermelho', 'Lata de refrigerante-Amarelo', 'Folha de caderno-verde', 'Cotonete-azul', 'Arame', 'Lata de doce', 'Barra de ferro', 'Caneta azul'];

//variavéis que armazenam a posição no sorteio (aA = "alternativa Aleatórias", abreviado)
let aA1, aA2, aA3, aA4;

//variavéis que armazena o intervalo para o sorteio
let interv1, interv2;

//Variáveis audio fase 2
let quizacerto, quizerro, audioquestoes, audiovitoria;

//carrega arquivos
function preload() {

  img = loadImage('img/splash-1.jpg');
  bgFase1 = loadImage('img/nivel1.jpg');
  bgFase2 = loadImage('img/nivel2.jpg');
  bgFase3 = loadImage('img/nivel3.jpg');
  bgFase4 = loadImage('img/nivel4.jpg');
  setaVoltar = loadImage('img/back-arrow.png');
  dados = loadImage('img/dados.png');
  derrota = loadImage('img/derrota.png');
  acerto = loadImage('img/acerto.png');
  aviso1 = loadImage('img/aviso1.png');
  aviso2 = loadImage('img/aviso2.png');
  aviso3 = loadImage('img/aviso3.png');
  aviso4 = loadImage('img/aviso4.png');
  pnivel1 = loadImage('img/pnivel1.png');
  pnivel2 = loadImage('img/pnivel2.png');
  pnivel3 = loadImage('img/pnivel3.png');
  pnivel4 = loadImage('img/pnivel4.png');
  lixosdentro1 = loadImage('img/lixosdentro1.png');
  quiztela = loadImage('img/quiztela.png');
  quiz1 = loadImage('img/quiz1.png');
  quiz2 = loadImage('img/quiz2.png');
  alternFundo = loadImage('img/alternFundo.png');
  
  
  jogarClaro = loadImage('img/jogarClaro.png');
  instruClaro = loadImage('img/instruClaro.png');
  credClaro = loadImage('img/credClaro.png');
  sobreClaro = loadImage('img/sobreClaro.png');
  
  fundoN1 = loadImage('img/nivel1.jpg')
  fundoN2 = loadImage('img/nivel2.jpg');
  fundoN3 = loadImage('img/nivel3.jpg');
  fundoN4 = loadImage('img/nivel4.jpg');
  fundoN5 = loadImage('img/nivel5.jpg');
  fundoN6 = loadImage('img/nivel6.jpg');

  lata1 = loadImage('img/latas/jogar.png');
  lata2 = loadImage('img/latas/instru.png');
  lata3 = loadImage('img/latas/cred.png');
  lata4 = loadImage('img/latas/sobre.png');
  
  caminhao_vermelho = loadImage('img/caminhao-vermelho.png');
  caminhao_amarelo = loadImage('img/caminhao-amarelo.png');
  caminhao_verde = loadImage('img/caminhao-verde.png');
  caminhao_azul = loadImage('img/caminhao-azul.png');

  imginstru = loadImage('img/latas/instrujogo.png');
  imgcred = loadImage('img/latas/credito.png');
  imgsobre = loadImage('img/latas/info.png');

  for (var i = 1; i <= 40; i++) {
    lixo[i] = loadImage('lixos/lixo' + i + '.png')
  }

  //audio de telas da fase 1
  audioclick = createAudio('audios/mouse_click.mp3');
  audiofase1 = createAudio('audios/audiofase1.mp3');
  audioacerto = createAudio('audios/audioacerto.mp3');
  audioerro = createAudio('audios/audioerro.mp3');
  passanivel = createAudio('audios/passanivel.mp3');
  
  //audio de telas da fase 2
  quizacerto = createAudio('audios/quiz/quizacerto.mp3');
  quizerro = createAudio('audios/quiz/quizerro.mp3');
  audioquestoes = createAudio('audios/quiz/audioquestoes.mp3');
audiovitoria = createAudio('audios/quiz/audiovitoria.mp3');
}
//executa uma vez
function setup() {

  createCanvas(800, 450);

  posX2 = width

  sorteio() //faz o sorteio logo no incio de qual mão o lixo ficará na pista e realiza o sorteio de acordo com cada nivel(intervalos).

  sorteioQuiz();

}

//executa várias vezes
function draw() {

  if (tela == 0) {
    audiovitoria.stop();
    menu();

  }

  if (tela == 1) { 
    
   if(nivel == 1){
     faseAtual(fundoN2, fundoN2); 
    }
    if(nivel == 2){
     faseAtual(fundoN4, fundoN4); 
    }
    if(nivel == 3){
     faseAtual(fundoN6, fundoN6); 
    }
    if(nivel == 4){
     faseAtual(fundoN5, fundoN5); 
    }

  }


  if (tela == 2) {
    instrucoes();
    image(setaVoltar, 50, 30, 50, 40);

  }
  
  if (tela == 3) {
    credito();
    image(setaVoltar, 50, 30, 50, 40);
  }

  if (tela == 4) {
    sobre();
    image(setaVoltar, 50, 20, 50, 40);
  }

  if (tela == 5) {
    derrotas();
  }

  if (tela == 6) {
    telaInicialQuiz();
  }

  if (tela == 7) {
    fase2();
  }

  if (tela == 8) {
    vitoria();
  }
}

//LINK DO VIDEO NO YOUTUBE:https://youtu.be/sQnPHNLC7Ag