//cenário
var posX1 = 0;
var posX2;
var velocidadeDeRolagem = 5;


function faseAtual(fundo1, fundo2){
  
image(fundo1, posX1, 0, width, height);
  image(fundo2, posX2, 0, width, height);
  
  posX1 -= velocidadeDeRolagem;
  posX2 -= velocidadeDeRolagem;
  
  if(posX1 < -width) {
    posX1 = width;
  }
  
  if(posX2 < -width) {
    posX2 = width;
  
  }
  
  // mostra na tela a vida, os pontos e nível
  textAlign(LEFT)
  image(dados, 0, 0, 180, 180);
  fill("#FFFFFF");
  strokeWeight(2);
  stroke("#0489B1");
  text("NÍVEL ", 73, 46);
  text("VIDA " , 73, 89);
  text("PONTOS " , 65, 132);
  
  fill("#000000")
  text(nivel, 143, 46);
  text(vida, 143, 90);
  
  image(lixosdentro1, 640, 25, 130, 130);
  image(lixo[lixoaleatorio], 655, 35, 100, 90);
  
  if(pontos == 0){
    text(pontos, 143, 132);  
  }
  if(pontos > 0 && pontos < 100){
    text(pontos, 139, 132);  
  }
  if(pontos >= 100){
    text(pontos, 135, 132);  
  }
  
  textAlign(CENTER, CENTER)
  fill("#FFFFFF")
  strokeWeight(1);
  stroke("#0489B1");
  text(nomeLixo[lixoaleatorio], 640, 132, 130, 23);
  
  
  //verifica se a vida é igual a 0, se for muda para a tela de derrota
  if(vida == 0){
    tela = 5
    vida = 3
    pontos = 0 
    nivel = 1
  }
  
  //verifica se os pontos é igual a 400, se for munda para a tela quiz 
  if(pontos == 400){
    tela = 6
    audiofase1.stop();
  }
  
  //verifica se presionou a tecla para cima e mudaa a posição Y do caminhão
   if (keyIsDown(UP_ARROW)) {
    camY = 250 
  }
  
//verifica se presionou a tecla para baixo e mudaa a posição Y do caminhão
  if (keyIsDown(DOWN_ARROW)) {
    camY = 350
  }
  
  //lixo da pista atraves do vetor [lixo]
  image(lixo[lixoaleatorio], lixoX, lixoY, 50 ,50 );
 
  if (nivel == 1){
  
    caminhao1();
  }
  
 if (nivel == 2){
  
    caminhao2();
  }
  
   if (nivel == 3){
  
    caminhao3();
  }
  
   if (nivel == 4){
  
    caminhao4();
  }
}

//sorteio de velores
function sorteio(){
  
  //sorteio da altura do lixo
  var sY = parseInt(random(0,1)*10);
  
  
  //sorteia em qual mão o Y ficará
  if(sY <= 5 ) {
    lixoY = 295;
   
    
  } else{
    lixoY = 385
  }
  
  
  
  
  if(nivel == 1){
    //sorteio do intervalo dos lixos
  lixoaleatorio = parseInt(random(1,20.9));
  
    
  }
  
  if(nivel == 2){
    //sorteio do intervalo dos lixos
  lixoaleatorio = parseInt(random(11,30.9));
  
    
  }
  
  if(nivel == 3){
    //sorteio do intervalo dos lixos
  lixoaleatorio = parseInt(random(21,40.9));
  
    
  }
  
  if(nivel == 4){
    //sorteio do intervalo dos lixos
  lixoaleatorio = parseInt(random(21,40.9));
  
    
  }
   
    
  
}