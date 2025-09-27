let portada;
let imagenes = [];
let numero = [
"1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpeg","9.jpeg","10.jpg","11.jpg","12.jpg","13.jpeg","14.jpeg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpeg"];
let estado = 0;// estado inicial

function preload() {
  portada = loadImage("assets/portada.jpg");
  
  for (let i = 0; i < numero.length; i++) {
    imagenes[i] = loadImage("assets/"+ numero[i]);
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
     text("pulse espacio para comenzar ",width/2,height -80); // evento: botones
     text("creditos  ",width/2,height -25); // evento: botones
   
  }else if( estado >= 1 && estado <=numero.length){
    image(imagenes[estado - 1],0,0, width,height);// imagen de fondo// imagen de fondo
    // evento: botones
    // otras cosas a visualizar en pantalla
  }
  if (frameCount %(60 * 3 ) == 0) { //cada 180 frames
    estado++;
    if (estado > numero.length){
      estado = 0; //vuelve a portada 
      
    }
  }
}
  
 /* else if( estado == 2 ){
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
  }else if( estado == 21 ){
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
  }*/
