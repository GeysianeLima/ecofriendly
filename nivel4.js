function caminhao4(){
  
  image(caminhao_azul, 20, camY,130 ,100 );
    
  //velocidade do lixo
    lixoX -= 7
    
  if(lixoX > 920){
    image(pnivel4, 0, 0, 800, 450);

   }
  
  
    if(lixoX < 0){
      
      
      if(lixoaleatorio >= 31 && lixoaleatorio <= 40){
        vida --; 
      }
      
      lixoX = 920;
      sorteio()
    }
    //comparações no lado esquerdo da pista
    if(camY == 250 && lixoY == 295 && lixoX >= 20 && lixoX <= 150 ){
      //console.log('ok')    
      
  //verifica se o lixo é o correto
      if(lixoaleatorio >= 31 && lixoaleatorio <= 40){
        lixoX = 920;
        sorteio();
        pontos += 10;
         audioacerto.play();
        
        if(pontos == 400){
          passanivel.play();
          sorteio();
          
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
      
       if(lixoaleatorio >= 31 && lixoaleatorio <= 40){
        lixoX = 920;
        sorteio();
        pontos += 10;
         audioacerto.play();
         
         if(pontos == 400){
           passanivel.play();
           sorteio();
           
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