let portada;
let imagenes = [];
let numero = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpeg",
    "9.jpeg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpeg",
    "14.jpeg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpeg"];
let estado = 0;// estado inicial
let miFuente;

function preload() {
  portada = loadImage("assets/portada.jpeg");
  
  for (let i = 0; i < numero.length; i++) {
    imagenes[i] = loadImage("assets/"+ numero[i]);
  } 
   miFuente = loadFont("assets/Jersey15-Regular.ttf"); 
}

function setup() {
   createCanvas(640,480);
   frameRate(60);//aseguramos 60 FPS 
}
 


function draw() {
  
  background(255); 
  

  
  if (estado == 0) {
  image(portada, 0, 0, width, height);
  //fill(200,230);// fondo del boton semi transparente 
     fill(8,58, 100,250);
     rectMode(CENTER);
     rect(width/2,height -80, 350, 50,10); // x, y , ancho ,alto, borde redondeado 
     rect(width/2,height -25, 100, 50,10); // x, y , ancho ,alto, borde redondeado 
     fill(0,0,225);
     textFont(miFuente);
     textSize(24);
     fill(59,100,8);
     textAlign(CENTER,CENTER);
     text("Pulse 'Espacio' para comenzar", width/2,height -82);
     
      if (boton(width/2, height - 80, 200, 50, "Comenzar")) {
    estado = 1;
  }
  
}else { 
 if ( estado >= 1 && estado <= 4){
  if (frameCount %(45 * 3 ) == 0) { 
    estado++;
  }
 }
   }
   if( estado == 1 ){
    image(imagenes[0], 0, 0);
 
     
   }else if( estado == 2 ){
    image(imagenes[1], 0, 0);
  
  }else if( estado == 3 ){
    image(imagenes[2], 0, 0);
   

  }else if( estado == 4){
    image(imagenes[3], 0, 0);

 }else if( estado == 5){
    image(imagenes[4], 0, 0);
 
}else if( estado == 6){
    image(imagenes[5], 0, 0);

  
}else if( estado == 7){
    image(imagenes[6], 0, 0);
    

}else if( estado == 8){
    image(imagenes[7], 0, 0);
 
 
}else if( estado == 9){
    image(imagenes[8], 0, 0);
    

}else if( estado == 10){
    image(imagenes[9], 0, 0);
    //image(decisiones[2],20,20,200,60);

}else if( estado == 11){
    image(imagenes[10], 0, 0);
    

}else if( estado == 12){
    image(imagenes[11], 0, 0);
    

}else if( estado == 13){
    image(imagenes[12], 0, 0);
    

}else if( estado == 14){
    image(imagenes[13], 0, 0);
    

}else if( estado == 15){
    image(imagenes[14], 0,0);
    //image(decisiones[3],20,20,200,60);

}else if( estado == 16){
    image(imagenes[15], 0, 0);
     

}else if( estado == 17){
    image(imagenes[16], 0, 0);
    
   
}else if( estado == 18){
    image(imagenes[17], 0, 0);
    

}else if( estado == 19){
    image(imagenes[18], 0, 0);
    

}else if( estado == 20){
    image(imagenes[19], 0, 0);
    

}else if( estado == 21){
    image(imagenes[20], 0, 0);

}
}

  function boton(x,y,w,h,txt){
     
   if (mouseIsPressed &&   // mouse presionado
      mouseX > x - w/2 && // dentro del ancho
      mouseX < x + w/2 &&
      mouseY > y - h/2 && // dentro del alto
      mouseY < y + h/2) {
    return true;
  }
  return false;
}  

function keyPressed() {
 
  if (key === ' ' || keyCode === RIGHT_ARROW) {
    estado++;
    if (estado > numero.length) {
      estado = 0; 
    }
  }

  
  if (keyCode === LEFT_ARROW) {
    estado--;
    if (estado < 0) {
      estado = numero.length; 
    }
  }
}
