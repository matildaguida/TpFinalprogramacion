let portada;
let estado = 0;// estado inicial

function preload() {
  
  portada = loadImage("assets/portada.jpg");
  
 
}


function setup() {
   createCanvas(640,480);
   
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
     text("pulse espacio para comenzar ",width/2,height -80); // evento: botones
     text("creditos  ",width/2,height -25); // evento: botones
   
     
  }else if( estado == 1){
    // imagen de fondo// imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
    
  }else if( estado == 2 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 3 ){
        // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla

  }else if( estado == 4 ){
// imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 5 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 6 ){
    // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 7 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla/
  }else if( estado == 8 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 9 ){
    // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 10 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }
  else if( estado == 11){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }
  else if( estado == 12 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 13 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 14 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 15 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 16 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 17 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 18 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 19 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 20 ){
   // imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }
 function keyPressed(){
   if (key === ''){ // espacio para avanzar 
   estado++;
   if (estado >20){
     estado = 0; //vuelve al inicio
   }
  }
 }
}
