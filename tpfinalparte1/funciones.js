// Función para mostrar la portada con botones
function mostrarPortada() {
  image(portada, 0, 0, width, height);

  fill(8, 58, 110, 250);
  rectMode(CENTER);
  rect(width / 2, height - 80, 350, 50, 10);
  rect(width / 2, height - 25, 100, 50, 10);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Pulse 'Espacio' para comenzar", width / 2, height - 80);
  text("Créditos", width / 2, height - 25);

  if (boton(width / 2, height - 80, 350, 50)){
    estado = 1;
  }
  if (boton(width / 2, height - 25, 100, 50)){
    estado = numero.length + 1;
  }
} 

// Función para mostrar cualquier imagen con un texto opcional
function mostrarImagenConTexto(indiceImagen, texto) {
  image(imagenes[indiceImagen], 0, 0, width, height);

  if (texto) { // si hay texto
    fill(40, 0, 80, 200);
    noStroke();
    rectMode(CORNER);
    rect(20, height - 140, width - 40, 120, 10);

    fill(255);
    textAlign(LEFT, TOP);
    
   // Tamaño del texto simple: si tiene menos de 10 frases, agrandar
    let tamaño = 16;
    if ((texto.split(".").length - 1) < 10) tamaño = 20;

    textSize(tamaño);
    text(texto, 30, height - 130, width - 60, 110);

  }
 }

function mostrarPregunta(){
    image(imagenes[4], 0, 0, width, height);
    
    // Recuadro de pregunta
  fill(40, 0, 80, 200);
  rectMode(CENTER);
  rect(width/2, 50, width - 10, 60, 80);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("¿Cómo se infiltran en la base de la Federación?", width/2, 50);
  
   // Botón A
  if (botonConTexto(width/2 - 215, height - 100, 200, 50, "A. Disfrazados de soldados alienigenas")) {
    estado = 6;
  }
  // Botón B
  if (botonConTexto(width/2 +10, height - 100, 230, 50, "B. A lo bruto,con armas interdimensionales")) {
    estado = 10;
  }
  // Botón C
  if (botonConTexto(width/2 + 225, height - 100, 180, 50, "C. Truco de lineas de tiempo rotas")) {
    estado = 15;
  }
}


function mostrarDecision2A() {
  image(imagenes[5], 0, 0, width, height); // Imagen 6 (índice 5)
  
  // Recuadro narrativo
  fill(40, 0, 80, 200);
  noStroke();
  rectMode(CORNER);
  rect(20, 20, width - 40, 70, 10);
  
  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Morty se pone un uniforme alienígena. Rick hackea la consola de seguridad, pero pronto los descubren.", 
       30, 30, width - 60, 80);
  
  // Recuadro de pregunta
  fill(40, 0, 80, 200);
  rect(width/2 -60, height - 160, 120, 50, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text("2A ¿Qué hacen?", width/2, height - 135);
  
  // Botón A1
  if (botonConTexto(width/2 - 160, height - 60, 300,50, "A1. Rick prende la alarma para crear caos y escapar")) {
    estado = 7;  // lo mandamos a la imagen 7
  }
  
  // Botón A2
  if (botonConTexto(width/2 + 150, height - 60,300, 50, "A2. Morty improvisa y finge ser un prisionero capturado")) {
    estado = 8;  // lo mandamos a la imagen 8
  }
}

function mostrarDecision2B() {
  image(imagenes[9], 0, 0, width, height); // índice 9 = imagen 10

  fill(40, 0, 80, 200);
  noStroke();
  rectMode(CORNER);
  rect(20, 20, width - 40, 70, 10);

  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Rick entra disparando con su pistola de portales modificada. Morty se cubre. La Federación responde con tropas.", 
       30, 30, width - 60, 80);

  fill(40, 0, 80, 200);
  rect(width/2 -150, height - 160, 295, 50, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text("2B ¿Cómo enfrentan la avalancha de enemigos?", width/2, height - 135);

//boton B1
  if (botonConTexto(width/2 - 140, height - 60, 300,50, "B1. Rick activa drones de combate que tenía guardados")) estado = 11;
//boton B2
  if (botonConTexto(width/2 + 150, height - 60,240, 50, "B2. Morty toma un alienígena y pelea")) estado = 13;
}

function mostrarDecision2C() {
  image(imagenes[14], 0, 0, width, height); // Imagen 15 (índice 14)
  
  fill(40, 0, 80, 200);
  noStroke();
  rectMode(CORNER);
  rect(20, 20, width - 40, 70, 10);
  
  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Rick y Morty usan un aparato para crear dos versiones de sí mismos y confundir a la seguridad. Pero pronto, los Mortys de otras líneas de tiempo empiezan a alterar las líneas.", 
       30, 30, width - 60, 80);
  
  fill(40, 0, 80, 200);
  rect(width/2 -120 , height - 160, 230, 50, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text("2C ¿Cómo manejan el descontrol?", width/2, height - 135);
  
  //boton 1C
  if (botonConTexto(width/2 - 160, height - 60, 258, 50, "C1. Rick intenta borrar a las copias defectuosas")) estado = 16;
 //boton 2C
  if (botonConTexto(width/2 + 150, height - 60, 325, 50, "C2. Morty convence a sus otras versiones de unirse al ataque")) estado = 17;
}

// Función para detectar botones
function boton(x, y, w, h) {
  return (mouseIsPressed &&
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2);
}

function botonConTexto(x, y, w, h, txt) {
  let dentro = mouseX > x - w/2 && mouseX < x + w/2 && mouseY > y - h/2 && mouseY < y + h/2;
  
  if (dentro) {
    fill(color(0,150, 0));  // Mover
  } else {
    fill(color(40, 0, 80, 200)); // Normal
  }
  
  rectMode(CENTER);
  rect(x, y, w, h, 10);
  
  fill(255);
  textSize(14);
  textAlign(CENTER, CENTER);
  text(txt, x, y);
  
  return dentro && mouseIsPressed;
}

function botonExtraInicio() {
  if (botonConTexto(width/2 + 245, height - 39, 110, 40, "Volver al Inicio")) {
    estado = 0; 
  }
}
function botonesFinales ( e ){
   if (botonConTexto(width/2 , height - 39, 110, 40, "Siguiente...")) {
    estado = e;  // sin retorno: estan editando una variable global
  }
}

// Navegación por teclado
function keyPressed() {
  if (key === ' ') {
    estado++;
    if (estado > numero.length + 1) estado = 0;
  }
}
