var gDebugMode = true;
var leftEar;

// Setup code goes here
function setup() {
  createCanvas(1000, 1000);

  textSize(20);
  textAlign(LEFT);
 }


// Draw code goes here
function draw() {
  background("blue");
  drawBackHair();
  drawEar();
  drawHead();
  drawBangs();
  if (gDebugMode == true){
  	drawDebugInfo();
  }
}

function drawHead(){
	noStroke();
	fill("#f477d1");
	beginShape();
	vertex(500,800); //bottom, clockwise//
	vertex(440, 786);
	vertex(300,686);
	vertex(230,580);
	vertex(220,600); //left//
	vertex(293,308);
	vertex(500,200); //top//
	vertex(680,308);
	vertex(780,600); //right//
	vertex(770,580);
	vertex(700,686)
	vertex(560, 786);
	endShape();
}

//draws ears and neck shapes
function drawEar(){
	noStroke();
	fill("#f477d1");
	ellipse(200, 550, 170,200);
	ellipse(800, 550, 170,200);
	fill("#ea56b1");
	rect(425, 740, 150, 180);
}

function drawBangs(){
	noStroke();
	fill("#f2299e");
	beginShape();
	vertex(500,180);
	vertex(500,270);
	vertex(440,340);
	vertex(410,380);
	//vertex(390,330);//
	vertex(340,410);
	vertex(300,430);
	vertex(280,530);
	vertex(250,470);
	vertex(210,450);
	vertex(230,350);
	vertex(310,250);
	vertex(380,190);
	vertex(450,170);
	endShape(CLOSE);

	fill("#853cc1");
	beginShape();
	vertex(500,180);
	vertex(500,270);
	vertex(560,340);
	vertex(570,380);
	//vertex(390,330);//
	vertex(640,410);
	vertex(680,430);
	vertex(700,530);
	vertex(730,470);
	vertex(770,450);
	vertex(750,350);
	vertex(700,250);
	vertex(630,190);
	vertex(550,170);
	endShape(CLOSE);
}

function drawBackHair(){
	noStroke();
	fill(0);
	let backLeft = beginShape();
	vertex(470,100);
	vertex(400,130);
	vertex(250,210);
	vertex(190,300);
	vertex(180,420);
	vertex(120,550);
	vertex(50,600);
	vertex(80,640);
	vertex(160,660);
	vertex(220,670);
	vertex(210,730);
	vertex(215,790);
	vertex(240,830);
	vertex(270,740);
	vertex(320,800);
	vertex(360,830);
	vertex(500,850); //center bottom//
	//vertex(640,830);
	endShape(CLOSE);

}


// shows x and y value at mouse point, toggles off and on by space bar
function drawDebugInfo(){
	fill(255);
	text("x: "+ mouseX + " y: " + mouseY, 2, height-2);
}

function keyTyped(){
	if (key === " "){
		gDebugMode = !gDebugMode;
	}
}
