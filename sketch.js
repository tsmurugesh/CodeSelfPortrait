var gDebugMode = true;
var bg;
var paper;

// Setup code goes here
function setup() {
  createCanvas(1000, 1000);

  bg = loadImage("assets/bg.png");
  //paper = loadImage("assets/paper.jpg");


  textSize(20);
  textAlign(LEFT);
  rectMode(CENTER);
 }


// Draw code goes here
function draw() {
  background(55);
  image(bg, 0, 0);


  if (gDebugMode == true){
  	drawDebugInfo();
  }

  drawBackHair();
  drawEar();
  drawHead();
  drawBangs();
  drawFace();
  drawClothes();
  //image(paper, 0, 0);
 }

// draws a bunch of facial features
function drawFace(){

	// smile
	stroke("#d84ba0");
	strokeWeight(10);
	noFill();
	arc(500,680, 180,80, 0.1,3);

	// eyebrows
	stroke(0);
	strokeWeight(17);
	arc(385,510, 160,80, 4.2,6);
	arc(615,510, 160,80, 3.4,5.2);

	//blush
	fill("#f458a6");
	noStroke();
	ellipse(350, 650, 100, 100);
	ellipse(650, 650, 100, 100);

	//glasses
	stroke("#ffc907");
	//noStroke();
	noFill();
	//fill("#a0e81b66")
	strokeWeight(10);
	rect(370, 570, 170, 150, 20,20,40,40);
	rect(630, 570, 170, 150, 20,20,40,40);
	line(455,540,545,540);

	
	noStroke();

	//nose
	fill("#d84ba0");
	ellipse(500, 650, 60, 40);


	fill(0);
	translate(-50,-50);
	scale(1.1);

	// left eye
	beginShape();
	vertex(450,540);
	vertex(430,520);
	vertex(390,500); 
	vertex(360,505);
	vertex(330,520);
	vertex(305,530); //wing//
	vertex(320,550); 
	vertex(350,540); //pupil turn// 
	vertex(350,570);
	vertex(360,590);
	vertex(355,605);
	vertex(380,595);
	vertex(390,605);
	vertex(400,595);
	vertex(425,605);
	vertex(425,595);
	vertex(430,570);
	vertex(427,545);
	endShape(CLOSE);
	
	// right eye
	beginShape();
	vertex(550,540);
	vertex(570,520);
	vertex(610,500); 
	vertex(640,505);
	vertex(670,520);
	vertex(695,530); //wing//
	vertex(680,550); 
	vertex(650,540); //pupil turn// 
	vertex(650,570);
	vertex(640,590);
	vertex(645,605);
	vertex(620,595);
	vertex(610,605);
	vertex(600,595);
	vertex(575,605);
	vertex(575,595);
	vertex(570,570);
	vertex(573,545);
	endShape(CLOSE);

	//eye shine

	fill("#ffc907");
	//ellipse(360,550,25,25);
	//ellipse(380,570,15,15);

	//ellipse(580,550,25,25);
	//ellipse(600,570,15,15);
	noFill();
	strokeWeight(2);
	stroke("#ffc907");
	ellipse(610,577,45,15);
	ellipse(390,577,45,15);


	fill("#ffc907");
	noStroke();
	push();
 	translate(width /2.7, height /1.85);
  	rotate(frameCount / -100.0);
  	star(0, 0, 9, 17, 4);
  	pop();

  	push();
 	translate(width /2.55, height /1.75);
  	rotate(frameCount / -100.0);
  	star(0, 0, 5, 12, 7);
  	pop();

  	push();
 	translate(width /1.7, height /1.85);
  	rotate(frameCount / -100.0);
  	star(0, 0, 9, 17, 4);
  	pop();

  	push();
 	translate(width /1.64, height /1.75);
  	rotate(frameCount / -100.0);
  	star(0, 0, 5, 12, 7);
  	pop();

}

// draws the head
function drawHead(){
	noStroke();
	fill("#f477d1");
	beginShape();
	vertex(500,800); //bottom, clockwise//
	vertex(440, 786);
	vertex(360, 740);
	vertex(300,686);
	vertex(230,550);
	vertex(220,600); //left//
	vertex(293,308);
	vertex(500,200); //top//
	vertex(680,308);
	vertex(780,600); //right//
	vertex(770,550);
	vertex(700,686)
	vertex(630, 745);
	vertex(560, 786);
	endShape();
}

//draws ears and neck shapes
function drawEar(){
	// ear
	noStroke();
	fill("#f477d1");
	ellipse(220, 545, 140,190);
	ellipse(780, 545, 150,190);

	// neck
	fill("#d84ba0");
	rect(500, 740, 150, 180);
}

// draws bangs
function drawBangs(){
	noStroke();

	// left side bangs
	fill("#f2299e");
	beginShape();
	vertex(500,180);
	vertex(500,320);
	vertex(440,390);
	vertex(430,460);
	//vertex(390,330);//
	vertex(380,400); //up point
	vertex(340,480);
	vertex(300,480);
	vertex(280,530);
	vertex(250,470);
	vertex(210,450);
	vertex(230,350);
	vertex(310,250);
	vertex(380,190);
	vertex(450,170);
	endShape(CLOSE);

	//right side bangs
	fill("#853cc1");
	beginShape();
	vertex(500,180);
	vertex(500,320);
	vertex(560,390);
	vertex(570,460);
	//vertex(390,330);//
	vertex(620,400); //up point
	vertex(660,480);
	vertex(700,480);
	vertex(720,530);
	vertex(750,470);
	vertex(790,450);
	vertex(770,350);
	vertex(690,250);
	vertex(620,190);
	vertex(550,170);
	endShape(CLOSE);

	stroke("#f477d1");
	strokeWeight(10);
	noFill();
	arc(490,230, 380,100, 0.1,3);
}

// draws the back of the hair
function drawBackHair(){
	noStroke();
	fill(0);
	beginShape();
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
	vertex(640,830);
	vertex(680,800);
	vertex(730,740);
	vertex(760,830);
	vertex(785,790);
	vertex(790,730);
	vertex(780,670);
	vertex(840,660);
	vertex(920,640);
	vertex(950,600);
	vertex(880,550);
	vertex(830,420);
	vertex(820,300);
	vertex(760,210);
	vertex(610,130);
	vertex(530,100);
	endShape(CLOSE);
}

// draws clothing
function drawClothes(){

	// turtleneck 
	fill("#ffc907");
    rect(500, 870, 190, 180);

    // sweater
	fill(0);
	//arc(500,1040,800,487,PI, TWO_PI);
	beginShape();
	vertex(80,1000);
	vertex(200,880);
	vertex(300,800);
	vertex(700,800);
	vertex(920,1000);
	beginContour();
	vertex(400,800);
	vertex(500,950);
	vertex(600,800);
	endContour(CLOSE);
	endShape(CLOSE);

    }

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
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
