function caminhao2(){
  
  image(caminhao_amarelo, 20, camY,130 ,100 );
    
  //velocidade do lixo
    lixoX -= 7
    
  if(lixoX > 920){
    image(pnivel2, 0, 0, 800, 450);

   }
  
  
    if(lixoX < 0){
      
      
      
      if(lixoaleatorio >= 11 && lixoaleatorio <= 20){
        vida -- 
        audioerro.play();
      }
      
      lixoX = 920;
      sorteio()
    }
    //comparações no lado esquerdo da pista
    if(camY == 250 && lixoY == 295 && lixoX >= 20 && lixoX <= 150 ){
      //console.log('ok')    
      
  //verifica se o lixo é o correto
      if(lixoaleatorio >= 11 && lixoaleatorio <= 20){
        lixoX = 920;
        sorteio();
        pontos += 10;
         audioacerto.play();
        
        if(pontos == 200){
           nivel = 3;
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
    
    //comparações no lado direito da pista
     if(camY == 350 && lixoY == 385 && lixoX >= 20 && lixoX <= 150 ){
      
       if(lixoaleatorio >= 11 && lixoaleatorio <= 20){
        lixoX = 920;
        sorteio();
        pontos += 10;
         audioacerto.play();
         
         if(pontos == 200){
           nivel = 3
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
       
      //console.log('ok')
      
  }
  
  
  
}