let portada;
let imagenes = [];
let numero = [
"1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpeg","9.jpeg","10.jpg","11.jpg","12.jpg","13.jpeg","14.jpeg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpeg"];
let estado = 0;// estado inicial
//let historia =[ "historia1.png", "historia1.2.png" ]
let historias = [
  "historia1.png",
  "historia1.2.png",
  "historia1.3.png"
];
let decisiones =[
  "decision1.png",
  "decision1A.png",
  "decision1B.png",
  "decision1C.png"
  ];

function preload() {
  portada = loadImage("assets/portada.jpg");
  
  for (let i = 0; i < numero.length; i++) {
    imagenes[i] = loadImage("assets/"+ numero[i]);
  }  
  for (let i = 0; i < historias.length; i++) {
    historias[i] = loadImage("assets/" + historias[i]);
  }
  for (let i = 0; i < decisiones.length; i++) {
    decisiones[i] = loadImage("assets/" +decisiones[i]);
  }


}

function setup() {
   createCanvas(640,480);
   frameRate(60);//aseguramos 60 FPS 
}

function draw() {
  
  background(255);
  
   if( estado == 0 ){
     image(portada,0,0,width, height);// imagen de fondo
     fill(200,230);// fondo del boton semi transparente 
     rectMode(CENTER);
     rect(width/2,height -80, 350, 50,10); // x, y , ancho ,alto, borde redondeado 
     rect(width/2,height -25, 100, 50,10); // x, y , ancho ,alto, borde redondeado 
    // otras cosas a visualizar en pantalla
     fill(0,0,225); //texto azul
     //fill(225); //texto blanco
     textSize(24);
     textAlign(CENTER,CENTER);
     text("Pulse espacio para comenzar ",width/2,height -80);
     text("Creditos",width/2+1,height-25);
   }else{
     if ( estado >= 1 && estado <= 4){
  if (frameCount %(75 * 3 ) == 0) { 
    estado++;
  }
 }
   }
   if( estado == 1 ){
    image(imagenes[0], 0, 0);
    image(historias[0], 150,350,350,100);
     
   }else if( estado == 2 ){
    image(imagenes[1], 0, 0);
    image(historias[1], 150,330,350,160);
   
  }else if( estado == 3 ){
    image(imagenes[2], 0, 0);
    image(historias[1], 150,330,350,160);

  }else if( estado == 4){
    image(imagenes[3], 0, 0);
    image(historias[2], 150,330,350,160);
 
 }else if( estado == 5){
    image(imagenes[4], 0, 0);
    image(decisiones[0],165,30,300 ,100);
    image(decisiones[1],10,360,200,60);
    image(decisiones[2],220,360,200,60);
    image(decisiones[3],430,360,200,60);

}else if( estado == 6){
    image(imagenes[5], 0, 0);
    image(decisiones[1],20,20,200,60);
  
}else if( estado == 7){
    image(imagenes[6], 0, 0);
    

}else if( estado == 8){
    image(imagenes[7], 0, 0);
 
 
}else if( estado == 9){
    image(imagenes[8], 0, 0);
    

}else if( estado == 10){
    image(imagenes[9], 0, 0);
    image(decisiones[2],20,20,200,60);

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
    image(decisiones[3],20,20,200,60);

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

   /* 
function keyPressed(){
    if (key ===' ') { // espacio para avanzar
    estado++;
    } if (estado> numero.length) {
      estado = 0; // vuelve a portada
   }
  }
    */
   // para botones para que vayan cuando tocas decisiones revisar despues 
  /*  function mousePressed() {
  // === MODELO BASE PARA DECISIONES ===
  if (estado == X) {   // X es la pantalla donde aparecen las opciones

    // Opción A
    if (mouseX > x1 && mouseX < x1 + ancho && mouseY > y1 && mouseY < y1 + alto) {
      estado = destinoA; // la pantalla a la que querés ir
    }

    // Opción B
    else if (mouseX > x2 && mouseX < x2 + ancho && mouseY > y2 && mouseY < y2 + alto) {
      estado = destinoB;
    }

    // Opción C
    else if (mouseX > x3 && mouseX < x3 + ancho && mouseY > y3 && mouseY < y3 + alto) {
      estado = destinoC;
    }*/
    



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
