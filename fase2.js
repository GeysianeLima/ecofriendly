function fase2(){
  //background(0);
  if(pergunta%2!=0){
    
     background(quiz1);
  
     }else{
       
       background(quiz2);
       
     }
   //console.log(mouseX + " "+ mouseY)
  textAlign(CENTER,CENTER);
  textSize(20);
  fill("#FFF");
  strokeWeight(5);
  stroke("#000");
  text(perguntas[pergunta],126, 1, 547, 91);
  
  //escrever o que é
  if((mouseX >= 312 && mouseX <= 475) && (mouseY >= 106 && mouseY <= 170)){    
      image(alternFundo, -6, -46, 800, 430)    
  }
  
  if((mouseX >= 312 && mouseX <= 475) && (mouseY >= 198 && mouseY <= 262)){  
      image(alternFundo, -6, 47, 800, 430)     
  }
  
  if((mouseX >= 312 && mouseX <= 475) && (mouseY >= 292 && mouseY <= 356)){
      image(alternFundo, -6, 140, 800, 430)    
  }
  
  if((mouseX >= 312 && mouseX <= 475) && (mouseY >= 384 && mouseY <= 448)){    
      image(alternFundo, -6, 232, 800, 430)
    }
  
  fill("#FFFFFF")
  strokeWeight(5);
  stroke("#000000");
  text(alternativas[aA1], 312, 106, 163, 64);
  text(alternativas[aA2], 312, 198, 163, 64);
  text(alternativas[aA3], 312, 292, 163, 64);
  text(alternativas[aA4], 312, 384, 163, 64);
  
  if(pergunta == 11){
  audioquestoes.stop();
  audiovitoria.play();
      tela = 8 
      
  }
  
}

//função que vai sortear as alternativa
function sorteioQuiz(){
  
  //define o intervalo para o sorteio
  if(pergunta == 1){
    
    interv1 = 1;
    interv2 = 4.9;
    
  }
  
  if(pergunta == 2){
    
    interv1 = 5;
    interv2 = 8.9;
    
  }
  
  if(pergunta == 3){
    
    interv1 = 9;
    interv2 = 12.9;
    
  }
  
  if(pergunta == 4){
    
    interv1 = 13;
    interv2 = 16.9;
    
  }
  
  if(pergunta == 5){
    
    interv1 = 17;
    interv2 = 20.9;
    
  }
  
  if(pergunta == 6){
    
    interv1 = 21;
    interv2 = 24.9;
    
  }
  
  if(pergunta == 7){
    
    interv1 = 25;
    interv2 = 28.9;
    
  }
  
  if(pergunta == 8){
    
    interv1 = 29;
    interv2 = 32.9;
    
  }
  
  if(pergunta == 9){
    
    interv1 = 33;
    interv2 = 36.9;
    
  }
  
  if(pergunta == 10){
    
    interv1 = 37;
    interv2 = 40.9;
    
  }
  
  //alternativa Aleatória
  aA1 = parseInt(random(interv1,interv2));
  aA2 = parseInt(random(interv1,interv2));
  aA3 = parseInt(random(interv1,interv2));
  aA4 = parseInt(random(interv1,interv2));
  
//faz com que as opções geradas não se repitam
  while((aA1 == aA2) || (aA1 == aA3) || (aA1 == aA4)){
    
    aA1 = parseInt(random(interv1,interv2));
    
  }
  while((aA2 == aA1) || (aA2 == aA3) || (aA2 == aA4)){
    
    aA2 = parseInt(random(interv1,interv2));
    
  }
  while((aA3 == aA1) || (aA3 == aA2) || (aA3 == aA4)){
    
    aA3 = parseInt(random(interv1,interv2));
    
  }
  while((aA4 == aA1) || (aA4 == aA2) || (aA4 == aA3)){
    
    aA4 = parseInt(random(interv1,interv2));
    
  }
  
  
}
