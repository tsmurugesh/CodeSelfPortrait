var gDebugMode = false;

// Setup code goes here
function setup() {
  createCanvas(1000, 1000);

  textSize(20);
  textAlign(LEFT);
 }


// Draw code goes here
function draw() {
  background("blue");
  if (gDebugMode == true){
  	drawDebugInfo();
  }
}

function drawDebugInfo(){
	fill(255);
	text("x: "+ mouseX + " y: " + mouseY, 2, height-2);
}

function keyTyped(){
	if (key === " "){
		gDebugMode = !gDebugMode;
	}
}