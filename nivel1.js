function caminhao1(){
  
  image(caminhao_vermelho, 20, camY,130 ,100 );
    
  //velocidade do lixo
    lixoX -= 7
    
     if(lixoX > 920){
     image(pnivel1, 0, 0, 800, 450);
   }
  
    if(lixoX < 0){
      
      
      //verifica se o lixo correto passou da tela
      if(lixoaleatorio >= 1 && lixoaleatorio <= 10){
        vida -- 
        audioerro.play();
      }
      
      //joga o lixo para tras e faz um novo sorteio
     lixoX = 920;
      sorteio()
      
    }
    //comparações no lado esquerdo da pista
    if(camY == 250 && lixoY == 295 && lixoX >= 20 && lixoX <= 150 ){
        
      
  //verifica se o lixo é o correto
      if(lixoaleatorio >= 1 && lixoaleatorio <= 10){
        lixoX = 920;
        sorteio();
        pontos += 10;
        audioacerto.play();
         
        if(pontos == 100){
           nivel = 2;
          sorteio();
          lixoX = 3680;
          passanivel.play();
         }
    
      } else {
        lixoX = 920;
        sorteio()
        vida--;
        audioerro.play();
      }
    }
    
    //comparações no lado direito da pista
     if(camY == 350 && lixoY == 385 && lixoX >= 20 && lixoX <= 150 ){
      
       if(lixoaleatorio >= 1 && lixoaleatorio <= 10){
        lixoX = 920;
        sorteio();
        pontos += 10;
         audioacerto.play();
         
         if(pontos == 100){
           nivel = 2
           sorteio();
           lixoX = 3680;
           passanivel.play();
         }
         
      } else{
        lixoX = 920;
        sorteio()
        vida--;
        audioerro.play();
      }
       
      
      
  }
  
  
  
}