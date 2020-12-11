function menu() {
  
  background(img);
  
    //JOGAR
    image(lata1, 150, 203, 120, 120);
    //INSTRUÇÕES
    image(lata2, 270, 203, 120, 120);
    //C´REDITOS
    image(lata3, 385, 203, 118, 118);
    //SOBRE
    image(lata4, 500, 203, 118, 118);
  
  //verifica se foi clicado em jogar
  if((mouseX >= 162 && mouseX <= 260) && (mouseY >= 207 && mouseY <= 315)) {
      image(jogarClaro, 18, 150, 387, 237);
    }
    
    // instruções
    if((mouseX >= 281 && mouseX <= 380) && (mouseY >= 207 && mouseY <= 315)) {
         image(instruClaro, 140, 150, 382, 236);
    }
    
    // credito
    if((mouseX >= 396 && mouseX <= 493) && (mouseY >= 207 && mouseY <= 315)) {
      image(credClaro, 252, 148, 386, 239);
    }
    
    // verifica se foi clicado em sobre
    if((mouseX >= 510 && mouseX <= 608) && (mouseY >= 207 && mouseY <= 315)) {
      image(sobreClaro, 369, 149, 382, 237);
    }
  
    
  textAlign(LEFT)
  fill("#FFFFFF")
  strokeWeight(3);
  stroke("#000000");
  textSize(13);
  textStyle(BOLD);
   text("JOGAR",188,295);
  textSize(11);
   text("INSTRUÇÕES",295,295);
  textSize(12);
   text("CRÉDITOS",415,295);
  textSize(12);
   text("SOBRE",537,295);
  
  
}
  
