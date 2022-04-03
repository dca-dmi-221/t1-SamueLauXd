let btnPlay, btnPausa, btnDetener, btnSiguiente, btnAnterior, btnAtras, btnAdelante;
let cancion, cancionActual;
let vol, volAct;
let listaCanciones;

function setup() {
  createCanvas(1280, 720);
  img = loadImage('imagenes/Reproductor.jpg');
  listaCanciones = [
    {
      name: "Kickstart My Heart",
      data: loadSound('canciones/Kickstart my heart.mp3')
    },
    {
      name: "I Wanna Rock",
      data: loadSound('canciones/I wanna rock.mp3')
    },
    {
      name: "Girls,Girls,Girls",
      data: loadSound('canciones/Girls,girls,girls.mp3')
    },
    {
      name: "Talk Dirty To Me",
      data: loadSound("canciones/Talk dirty to me.mp3")
    },
    {
      name: "The Kids Are Back",
      data: loadSound('canciones/The kids are back.mp3')
    },
    {
      name: "Take Me To The Top",
      data: loadSound('canciones/Take me to the top.mp3')
    },
  ]

  cancion = listaCanciones[0].data;
  cancionActual = 1;

  btnPlay = createButton('Play');
  btnPlay.position(590, 573);
  btnPlay.mousePressed(reproductor);

  btnPausa = createButton('Pausa');
  btnPausa.position(635, 573);
  btnPausa.mousePressed(pausa);

  btnDetener = createButton('Detener');
  btnDetener.position(460, 573);
  btnDetener.mousePressed(detener);

  btnSiguiente = createButton('Siguiente');
  btnSiguiente.position(815, 573);
  btnSiguiente.mousePressed(siguiente);

  btnAnterior = createButton('Anterior');
  btnAnterior.position(755,573);
  btnAnterior.mousePressed(anterior);

  btnAtras = createButton('<<');
  btnAtras.position(560,573);
  btnAtras.mousePressed(atras);

  btnAdelante = createButton('>>');
  btnAdelante.position(683,573);
  btnAdelante.mousePressed(adelante);

}

function draw() {
  background(220);
  image(img,0,0);
  selectorCancion();
  visualizadorTexto();
}

function reproductor(){
  if (!cancion.isPlaying()  ) {
    cancion.play();
  }
}

function pausa(){
  if (cancion.isPlaying()) {
    cancion.pause();
  }
}

function detener(){
  if (cancion.isPlaying()) {
    cancion.stop();
  }
}

function siguiente(){
  cancion.stop();
  if (cancionActual < listaCanciones.length) {
    cancion = listaCanciones[cancionActual++].data;
    cancionActual = cancionActual++;
  } else{
    cancion = listaCanciones[0].data;
    cancionActual = 1;
  }
  cancion.play();
}

function anterior(){
  cancion.stop();
  if (cancionActual > listaCanciones[0]) {
    cancion = listaCanciones[cancionActual--].data;
    cancionActual = cancionActual--;
  } else{
    
  }
  cancion.play();
}

function atras(){
  if (cancion.isPlaying()) {
    cancion.jump(cancion.currentTime() - 10);
  }
}

function adelante(){
  if (cancion.isPlaying()) {
    cancion.jump(cancion.currentTime() + 10);
  }
}

function selectorCancion(){
  for (let i = 0; i < listaCanciones.length; i++) {
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text(listaCanciones[i].name, 1160, (40*i)+160);    
  }
}

function visualizadorTexto(){
  if (cancion.isPlaying()) {
    fill(255);
    textAlign(CENTER);
    textSize(80);
    text(listaCanciones[cancionActual-1].name, 650, 300);
  }
}
