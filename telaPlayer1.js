function tela1(){
  background(fundo,1000);
  noStroke();
  mouseMoved();
  imageMode(CENTER);
  mostrarBola ();
  imageMode(CORNER);
  movimentaBola ();
  verificaColisaoBorda ();
  mostrarGoleiro1 ();
  mostrarGoleiro2 ();
  movimentaGoleiro1();
  colisaoGoleiro(xGoleiro1, yGoleiro1);
  colisaoGoleiro(xGoleiro2, yGoleiro2);
  movimentarGoleiro2();
  incluiPlacar();
  marcaPonto();
  calculaChanceDeErrar();
  bolinhaNaoFicaPresa();
  voltar();


//detalhando as funcoes chamadas no draw

function mostrarBola(){
  image(Bola, xBola,yBola,diametro, raio)
}

function movimentaBola(){
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function verificaColisaoBorda(){
  if (xBola  > width || xBola < 0){velocidadeXBola *= -1}
  if (yBola  > height || yBola <0){velocidadeYBola *= -1}
}

function mostrarGoleiro1(){
  image(goleiro1, xGoleiro1,yGoleiro1,GoleiroComprimento, GoleiroAltura)
}

function mostrarGoleiro2(){
  image(goleiro2, xGoleiro2, yGoleiro2, GoleiroComprimento, GoleiroAltura)
}

function movimentaGoleiro1(){
  if (keyIsDown(87)){
    yGoleiro1 -= 10;
}

  if (keyIsDown(83)){
    yGoleiro1 += 10;
  }
}

function  colisaoGoleiro(x,y){
  Colidiu = collideRectCircle(x, y, GoleiroComprimento, GoleiroAltura, xBola, yBola, raio);  
  if (Colidiu) {
        velocidadeXBola *= -1;
    sGoleiro.play();
    }
}

function movimentarGoleiro2(){
  velocidadeYGoleiro2 = yBola -yGoleiro2 - GoleiroComprimento /2 -1;
  yGoleiro2 += velocidadeYGoleiro2 + chanceDeErrar
  calculaChanceDeErrar()
}

function incluiPlacar(){
  stroke (255);
  textAlign(CENTER);
  textSize (18);
  fill(color(0, 100, 0));
  rect (179, 7, 42, 25);
  fill(255);
  text(meusPontos, 200, 26);
  fill(color(0, 100, 0));
  rect (379, 7, 42, 25);
  fill(255);
  text(pontosDoOponente, 400, 26)
}

function marcaPonto(){
  if (xBola > 600){
    meusPontos += 1;
    gol.play();
  }
  if (xBola < 0){
    pontosDoOponente += 1;
   gol.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
} else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
  
function bolinhaNaoFicaPresa(){
    if (xBola < 0){
      xBola = 30
    }
    if (xBola > 601){
      xBola = 570
    }
}
  
  //tecla de voltar
function voltar(){
 textAlign(CENTER);
  textSize(16);
  fill(color(0, 100, 0));
  rect(xV,yV,lV,hV)
  fill(255);
  text("Voltar",(xV+22),(yV+15))
}
}

