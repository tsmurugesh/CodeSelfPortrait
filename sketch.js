var gDebugMode = true;
var bg;
var paper;

// Setup code goes here
function setup() {
  createCanvas(1000, 1000);

  bg = loadImage("assets/bg2.png");

  textSize(40);
  text(255);
  textAlign(CENTER);
  rectMode(CENTER);
 }


// Draw code goes here
function draw() {
  background(55);
  image(bg, 0, 0);

  drawBackHair();
  drawBody();
  drawHead();
  drawBangs();
  drawFace();
  drawAccs();

  if (gDebugMode == true){
  	drawDebugInfo();
  }
 }

// draws a bunch of facial features
function drawFace(){

	// smile
	stroke("#d84ba0");
	strokeWeight(10);
	noFill();
	arc(500,670, 180,80, 0.1,3);

	// ear lines
	arc(210,540, 80,140, HALF_PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
	arc(790,540, 80,140, PI+QUARTER_PI,QUARTER_PI);


	// eyebrows
	stroke(0);
	strokeWeight(17);
	arc(385,510, 160,80, 4.2,6);
	arc(615,510, 160,80, 3.4,5.2);

	// moles
	strokeWeight(5);
	point(308,615);
	point(388,709);

	//blush
	fill("#f458a6");
	noStroke();
	ellipse(350, 650, 100, 100);
	ellipse(650, 650, 100, 100);

	//nose
	fill("#d84ba0");
	ellipse(500, 630, 60, 40);

	fill(0);
	push();
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
	noFill();
	strokeWeight(2);
	stroke("#e923ff");
	ellipse(610,577,45,15);
	ellipse(390,577,45,15);
	stroke("#72faff");
	ellipse(407,555,7,7);
	ellipse(630,550,7,7);

	fill("#d1fffd");
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
  	pop();

}

// draws the head
function drawHead(){
	noStroke();
	fill("#f477d1");

	ellipse(220, 545, 140,190);
	ellipse(780, 545, 150,190);

	beginShape();
	vertex(500,795); //bottom, clockwise//
	vertex(440, 786);
	vertex(360, 750);
	vertex(300,686);
	vertex(240,550);
	//vertex(220,600); //left//
	vertex(293,308);
	vertex(500,200); //top//
	vertex(680,308);
	//vertex(780,600); //right//
	vertex(770,550);
	vertex(700,686)
	vertex(630, 750);
	vertex(560, 786);
	endShape(CLOSE);

}

// draws body structure
function drawBody(){
	noStroke();

	// neck
	fill("#d84ba0");
	rect(500, 740, 150, 200);

	// body
	beginShape();
	vertex(130,1000);
	vertex(200,910);
	vertex(280,866);
	vertex(350,850);
	vertex(420,840);
	vertex(580,840);
	vertex(660,850);
	vertex(720,866);
	vertex(800,910);
	vertex(870,1000);
	endShape(CLOSE);

}

// draws bangs
function drawBangs(){
	noStroke();
	fill("#7f1c93");
	rect(500,330,100,40);

	// left side bangs
	fill("#f2299e");
	beginShape();
	vertex(500,180);
	vertex(530,200);
	vertex(470,240);
	vertex(530,280);
	vertex(500,300);
	vertex(500,350)
	vertex(470,320);
	vertex(440,390);
	vertex(430,460);
	vertex(380,400); 
	vertex(340,480);
	vertex(300,460);
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
	vertex(530,200);
	vertex(470,240);
	vertex(530,280);
	vertex(500,300);
	vertex(500,350);
	vertex(530,320);
	vertex(560,390);
	vertex(570,460);
	vertex(620,400); 
	vertex(660,480);
	vertex(700,460);
	vertex(720,530);
	vertex(750,470);
	vertex(790,450);
	vertex(770,350);
	vertex(690,250);
	vertex(620,190);
	vertex(550,170);
	endShape(CLOSE);

	// hair stars
	stroke("#d1fffd");
	strokeWeight(2);
	noFill();

	push();
 	translate(width /3.2, height /3.1);
  	star(0, 0, 17, 28, 4);
  	pop();

  	push();
 	translate(width /1.4, height /2.8);
  	star(0, 0, 11, 18, 4);
  	pop();

  	push();
 	translate(width /1.5, height /3.4);
  	star(0, 0, 20, 32, 5);
  	pop();

  	push();
 	translate(width /2.5, height /2.9);
  	star(0, 0, 6, 11, 7);
  	pop();

  	push();
 	translate(width /1.7, height /3);
  	star(0, 0, 6, 11, 7);
  	pop();

  	push();
 	translate(width /2.6, height /3.6);
  	star(0, 0, 9, 18, 6);
  	pop();
}

// draws the back of the hair
function drawBackHair(){
	noStroke();
	fill(0);
	beginShape();
	vertex(440,120);
	vertex(370,130);
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
	vertex(630,130);
	vertex(560,120);
	endShape(CLOSE);
}

// loops to choose what outfit to draw upon arrow key press
 function drawAccs(){
	fill(255);
	if (keyCode === UP_ARROW){
		outfitOne();
	}
	else if (keyCode === DOWN_ARROW){
		outfitTwo();
	}
	else if (keyCode === LEFT_ARROW){
		outfitThree();
	}
	else if (keyCode === RIGHT_ARROW){
		outfitFour();
	}
	else{
		text("choose an outfit with the arrow keys!", 500,75);
	}

}

// pink sweater with turtleneck outfit
function outfitOne(){
	// turtleneck 
	fill("#d1fffd");
    rect(500, 880, 190, 150);
    stroke(0);
    strokeWeight(4);
    line(400,820,600,820);
    line(400,840,600,840);
    line(400,860,600,860);
    line(400,880,600,880);
    line(400,900,600,900);
    line(400,920,600,920);

    noStroke();
	// sweater
	fill("#f442a1");
	beginShape();
	vertex(130,1000);
	vertex(200,910);
	vertex(280,866);
	vertex(350,850);
	vertex(400,840);
	vertex(500,950)
	vertex(600,840)
	vertex(650,850);
	vertex(720,866);
	vertex(800,910);
	vertex(870,1000);
	endShape(CLOSE);

	// beret
    fill("#f477d1");
	beginShape();
	vertex(217,260);
	vertex(250,210);
	vertex(370,130);
	vertex(440,120);
	vertex(560,120);
	vertex(630,130);
	vertex(760,210);
	vertex(790,260);
	vertex(800,220);
	vertex(800,190);
	vertex(660,60);
	vertex(340,60);
	vertex(200,190);
	vertex(200,220);
	endShape();
}

// green jacket cherry earrings outfit
function outfitTwo(){
	push();
	//shirt
	stroke("#ed1258");
	strokeWeight(30);
	noFill();
	line(340,910,660,910);
	noStroke()
	fill("white");
	rect(500,960, 330,100);

	// jacket
	fill("#a9c413");
	beginShape();
	vertex(130,1000);
	vertex(200,910);
	vertex(280,866);
	vertex(350,850);
	vertex(420,840);
	vertex(580,840);
	vertex(660,850);
	vertex(720,866);
	vertex(800,910);
	vertex(870,1000);
	beginContour();
	vertex(420,840);
	vertex(340,850);
	vertex(360,1000);
	vertex(640,1000);
	vertex(660,850);
	vertex(580,840);
	endContour(CLOSE);
	endShape(CLOSE);

	//earrings
	noFill();
	stroke("#a9c413");
	strokeWeight(5);
	line(220,620, 200,700);
	line(220,620, 250,720);
	line(780,620, 730,710);
	line(780,620, 780,700);

	noStroke();
	fill("#ed1258");
	ellipse(200,700,40,40);
	ellipse(250,720,40,40);
	ellipse(730,710,40,40);
	ellipse(780,700,40,40);

	//glasses
	stroke("#d1fffd");
	noFill();
	strokeWeight(10);
	rect(370, 575, 170, 160, 40,40,70,70);
	rect(630, 575, 170, 160, 40,40,70,70);
	arc(500,545,90,50,PI,TWO_PI);
	pop();
}

// purple and white outfit 
function outfitThree(){
	push();
	// shirt
	fill("#c7a9f2");
	beginShape();
	vertex(130,1000);
	vertex(200,910);
	vertex(280,866);
	vertex(350,850);
	vertex(420,840);
	vertex(420,805);
	vertex(580,805);
	vertex(580,840);
	vertex(660,850);
	vertex(720,866);
	vertex(800,910);
	vertex(870,1000);
	endShape(CLOSE);

	//dress
	fill("#d1fffd");
	beginShape();
	vertex(275,1000);
	vertex(280,920);
	vertex(500,980);
	vertex(720,920);
	vertex(725,1000);
	endShape(CLOSE);

	noFill();
	stroke("#d1fffd");
	strokeWeight(17);
	line(300,860,275,1000);
	line(700,860,725,1000);

	//face glitter
	strokeWeight(5);
	point(370,630);
	point(345,649);
	point(625,656);
	point(674,666);
	strokeWeight(8);
	point(324,626);
	point(394,641);
	point(645,636);
	point(684,638);

	//earrings
	stroke("#ffd026");
	fill("#ffd026")
	line(225,317,265,350);
	line(220,335,255,368);
	ellipse(220,620,20,20);
	ellipse(220,650,5,5);
	ellipse(220,670,5,5);
	ellipse(220,700,25,25);
	ellipse(780,620,20,20);
	ellipse(780,650,5,5);
	ellipse(780,670,5,5);
	ellipse(780,700,25,25);

	noStroke();
	strokeWeight(2);
	fill("#e923ff");
	ellipse(220,700,20,20);
	ellipse(780,700,20,20);

	stroke("#d1fffd");
	strokeWeight(8);
	point(214,695);
	point(773,695);
	pop();

}

// white and black shirt outfit
function outfitFour(){
	push();
	// black turtleneck
	fill(0);
	beginShape();
	vertex(130,1000);
	vertex(200,910);
	vertex(280,866);
	vertex(350,850);
	vertex(420,840);
	vertex(420,800);
	vertex(580,800);
	vertex(580,840);
	vertex(660,850);
	vertex(720,866);
	vertex(800,910);
	vertex(870,1000);
	endShape(CLOSE);

	// white button up
	fill("#c5e7ea");
	beginShape();
	vertex(250,1000);
	vertex(200,910);
	vertex(280,866);
	vertex(350,850);
	vertex(420,840);
	vertex(500,920);
	vertex(580,840);
	vertex(660,850);
	vertex(720,866);
	vertex(800,910);
	vertex(750,1000);
	endShape(CLOSE);
	fill("#d1fffd");
	triangle(420,840,500,920,420,950);
	triangle(500,920,580,840,580,950);

	//glasses
	stroke("#d1fffd");
	noFill();
	strokeWeight(10);
	rect(370, 575, 170, 160, 40,40,70,70);
	rect(630, 575, 170, 160, 40,40,70,70);
	arc(500,545,90,50,PI,TWO_PI);
	pop();


}

// function for spinning stars, from the p5 refrence library
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
	text("x: "+ mouseX + " y: " + mouseY, 50, height-2);
}

function keyTyped(){
	if (key === " "){
		gDebugMode = !gDebugMode;
	}
}
