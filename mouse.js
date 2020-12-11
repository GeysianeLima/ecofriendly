function mouseClicked() {
  
  //verifica se está no menu
  if(tela == 0){ 
    
    //verifica se foi clicado na lixeira jogar
    if((mouseX >= 162 && mouseX <= 260) && (mouseY >= 207 && mouseY <= 315)) {
      tela = 1;
      audioclick.play();
      audiofase1.loop();

    }
    
    // verifica se foi clicado em instuções
    if((mouseX >= 281 && mouseX <= 380) && (mouseY >= 207 && mouseY <= 315)) {
      tela = 2;
      audioclick.play();   
    }
    
    // verifica se foi clicado em credito
    if((mouseX >= 396 && mouseX <= 493) && (mouseY >= 207 && mouseY <= 315)) {
      tela = 3;
      audioclick.play();
    }
    
    // verifica se foi clicado em sobre
    if((mouseX >= 510 && mouseX <= 608) && (mouseY >= 207 && mouseY <= 315)) {
      tela = 4;
      audioclick.play();
    }
  }

// Verifica se houve clique na seta de voltar
 if (tela == 2 || tela == 3 || tela == 4) {
  if((mouseX >= 50 && mouseX <= 100) && (mouseY >= 20 && mouseY <= 60)) {
    tela = 0; 
    audioclick.play();
  }
} 

 if(tela == 5 || tela == 8){
    if((mouseX >= 50 && mouseX <= 100) && (mouseY >= 20 && mouseY <= 60)){
      
      tela = 0;
      nivel = 1;
      vida = 3;
      pontos = 0;
      lixoX = 3680;
      pergunta = 1;
      sorteio();
      sorteioQuiz();
      audiofase1.stop();
      audioquestoes.stop();
      audiovitoria.stop();
    }  
  }

 if(tela == 6){  
  if((mouseX >= 126 && mouseX <= 202) && (mouseY >= 266 && mouseY <= 343)){  
    tela = 7;
    audioquestoes.loop();
  }   
}
  
 if(tela == 7){

  //verifica em qual alternativa clicou
  if((mouseX >= 312 && mouseX <= 475) && (mouseY >= 106 && mouseY <= 170)){    
      //console.log("aA1")
    
    if(alternativas[aA1] === respostas[pergunta]){
      
      //console.log("resposta certa")
      pergunta++;
      sorteioQuiz();
      quizacerto.play();
      
      } else {
        //console.log("resposta errada")
        tela = 6;  
        quizerro.play();
        audioquestoes.stop();
      }
  }
  
  if((mouseX >= 312 && mouseX <= 475) && (mouseY >= 198 && mouseY <= 262)){  
      //console.log("aA2")
    
      if(alternativas[aA2] === respostas[pergunta]){
      
      //console.log("resposta certa")
        pergunta++;
      sorteioQuiz();
        quizacerto.play();
      
      }else{
        
        //console.log("resposta errada")
        tela = 6;
        quizerro.play();
        audioquestoes.stop();
      } 
  }
  
  if((mouseX >= 312 && mouseX <= 475) && (mouseY >= 292 && mouseY <= 356)){
      
      //console.log("aA3")
    
      if(alternativas[aA3] === respostas[pergunta]){
      
      //console.log("resposta certa")
        pergunta++;
      sorteioQuiz();
        quizacerto.play();
      
      }else{
        
        //console.log("resposta errada")
        tela = 6;
        quizerro.play();
        audioquestoes.stop();
      }
      
  }
  
  if((mouseX >= 312 && mouseX <= 475) && (mouseY >= 384 && mouseY <= 448)){
      
      //console.log("aA4")
    
      if(alternativas[aA4] === respostas[pergunta]){
      
      //console.log("resposta certa")
        pergunta++;
      sorteioQuiz();
        quizacerto.play();
      
      }else{
        
        //console.log("resposta errada")
        tela = 6;
        quizerro.play();
        audioquestoes.stop();
      }
      
    }
  }
} 

