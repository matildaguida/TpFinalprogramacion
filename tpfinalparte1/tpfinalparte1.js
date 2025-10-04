
let portada;
let imagenes = [];
let numero = [
  "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpeg","9.jpeg","10.jpg",
  "11.jpg","12.jpg","13.jpeg","14.jpeg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg",
  "21.jpeg","22.jpg"
];
let estado = 0; // Estado inicial
let miFuente;
let tiempoEstado = 0; // guarda cuando entramos al estado
let duracionEstado = 3000; // 3000 ms = 3 segundos por estado

// Opcional: textos para cada estado (puede quedar vacío si no hay)
let textos = [];
textos[1] = "Rick descubre que la Federación Galáctica ha creado un arma definitiva: un portal rojo que no solo abre dimensiones, sino que borra realidades completas. Si la activan, podrían eliminar la Tierra de la existencia.";
textos[22] = "Créditos: Alumna Moral Cardozo Luz Clarita y Guida Matilda"; // ejemplo de texto para créditos

function preload() {
  portada = loadImage("assets/portada.jpeg");
  for (let i = 0; i < numero.length; i++) {
    imagenes[i] = loadImage("assets/" + numero[i]);
  } 
  miFuente = loadFont("assets/Jersey15-Regular.ttf"); 
}

function setup() {
  createCanvas(640, 480);
  frameRate(60);
  textFont(miFuente);
}

function draw() {
  background(255);
  
   // Avanzar automáticamente de estado 1 a 4 usando millis()
  if (estado >= 1 && estado <= 4) {
    if (tiempoEstado === 0) tiempoEstado = millis(); // guardar inicio
    if (millis() - tiempoEstado > duracionEstado) {
      estado++;
      tiempoEstado = millis(); // reinicia el contador para el siguiente estado
    }
  } else {
    tiempoEstado = 0; // resetea si estamos fuera del rango 1-4
  }

  if (estado === 0) {
    mostrarPortada();
  } else if (estado >= 1 && estado <= 4) {
    mostrarImagenConTexto(estado - 1, textos[estado]);
  } else if (estado >= 5 && estado <= numero.length) {
    mostrarImagenConTexto(estado - 1, textos[estado]);
  } else if (estado === numero.length + 1) {
    mostrarImagenConTexto(numero.length - 1, textos[22]);
  }
}

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

  if (boton(width / 2, height - 80, 350, 50)) estado = 1;
  if (boton(width / 2, height - 25, 100, 50)) estado = numero.length + 1;
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
    textSize(16);
    textAlign(LEFT, TOP);
    text(texto, 30, height - 130, width - 60, 110);
  }
}

// Función para detectar botones
function boton(x, y, w, h) {
  return (mouseIsPressed &&
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2);
}

// Navegación por teclado
function keyPressed() {
  if (key === ' ' || keyCode === RIGHT_ARROW) {
    estado++;
    if (estado > numero.length + 1) estado = 0;
  }

  if (keyCode === LEFT_ARROW) {
    estado--;
    if (estado < 0) estado = numero.length + 1;
  }
}
