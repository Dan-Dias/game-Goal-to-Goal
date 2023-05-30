//variaveis da tela de Menu
var tela=0;
var x1 = 175;
var y1 = 180;
var l1 = 262;
var h1 = 35;

var x2 = 175;
var y2 = 270;
var l2 = 262;
var h2 = 35;

var xV = 278;
var yV = 375;
var lV = 45;
var hV = 20;

var mouseX = 0;
var mouseY = 0;

//variaveis da bolinha
let xBola = 300;
let yBola = 200;
let diametro =45;
let raio = diametro/1;

//velocidade da bolinha
let velocidadeXBola = 8;
let velocidadeYBola = 8;

//variaveis goleiro 1
let xGoleiro1 = -11;
let yGoleiro1 = 150;
let GoleiroComprimento = 40;
let GoleiroAltura = 90;
let Colidiu = false;

//goleiro 2
let xGoleiro2 = 568;
let yGoleiro2 = 250;
let velocidadeyGoleiro2;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons
let sGoleiro;
let trilha;
let gol;
let apito;
let gbIntro;

function preload(){
  trilha = loadSound("weTrilha.mp3");
  gol = loadSound("Gol.mp3");
  sGoleiro = loadSound("goleiro.mp3");
  apito = loadSound("apito.mp3");
  gbIntro = loadSound("gbIntro.mp3");
}

//Variavel pro oponente errar
let chanceDeErrar = 1;

//imagens
let fundo;
let goleiro1;
let goleiro2;
var Bola;
var fundoMenu;
var player1;
var player2;
var golAgol;

//tamanho da area de trabalho
function setup() {
  createCanvas(600,400);
  fundo= loadImage ('Fundo.jpg')
  goleiro1= loadImage('Goleiro1.png')
  goleiro2= loadImage('Goleiro2.png')
  Bola= loadImage('Bola.png')
  fundoMenu= loadImage ('fundoMenu.png')
  player1=loadImage ('Player1.png')
  player2=loadImage ('Player2.png')
  golAgol=loadImage ('Gol a gol.png')
  gbIntro.play();
  trilha.loop();
}

//roda em loop os comandos
function draw() {
   background(fundoMenu);
  noStroke();
  mouseMoved();
  if (tela==0){
    menu()
  }
 if (tela==1){
    tela1()
   
  }
   if (tela==2){
    tela2()
  }
 
}
 

//function menu
function menu(){
  image(golAgol,50,50)
  image(player1,x1,y1)
  image(player2,x2,y2)
}

function moveMouse(){
     if(mouseX>=x2 && mouseX<=(x2+l2) && mouseY>=y2 && mouseY<=(y2+h2)){
    //noFill();
      //stroke()
      rect(x2,y2,150,200,10)
    }

 }

//function clicked
function mouseClicked(){
  if(tela==0){
    if(mouseX>=x1 && mouseX<=(x1+l1) && mouseY>=y1 && mouseY<=(y1+h1)){
    apito.play();
    tela=1;}
  }
  if(tela==0){
  if(mouseX>=x2 && mouseX<=(x2+l2) && mouseY>=y2 && mouseY<=(y2+h2)){
    apito.play();
    tela=2;}
  }
  if(tela!=0){
    if(mouseX>=xV && mouseX<=(xV+lV) && mouseY>=yV && mouseY<=(yV+hV)){
    tela=0;
  }
}
}

//function Movimento do mouse
function mouseMoved(){
  if(tela==0){
    if(mouseX>=x1 && mouseX<=(x1+l1) && mouseY>=y1 && mouseY<=(y1+h1)){
    push();
    noFill();
    stroke(255)
    strokeWeight(3)
    rect(x1-4,y1-4,l1+8,h1+8,10);}
    pop();
  }
  if(tela==0){
  if(mouseX>=x2 && mouseX<=(x2+l2) && mouseY>=y2 && mouseY<=(y2+h2)){
    push();
    noFill();
    stroke(255)
    strokeWeight(3)
    rect(x2-4,y2-4,l2+8,h2+8,10);}
    pop();
  }
 if(tela!=0){
    if(mouseX>=xV && mouseX<=(xV+lV) && mouseY>=yV && mouseY<=(yV+hV)){
    push();
    noFill();
    stroke(255)
    strokeWeight(4)
    rect(xV,yV,lV,hV);}
    pop();
  }
}

