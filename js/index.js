function setup() {
  createCanvas(800, 600);
  generateTask();
}

function mouseClicked(){
  if(mouseY>400){
  	generateTask();
  }
	
}


function generateTask() {
  var textPos = 440;
  var bgColor = generateRandomHex();

  var c1x = round(random(width / 4, width - 180));
  var c1y = round(random(height / 3, height / 2 - 50));
  var c1r = round(random(100, 160));
  var c1Col = generateRandomHex();

  var c2x = round(random(width / 4, width - 180));
  var c2y = round(random(height / 3, height / 2 - 50));
  var c2r = round(random(100, 160));
  var c2Col = generateRandomHex();

  var rx = round(random(width / 4, width - 180));
  var ry = round(random(height / 3, height / 2 - 50));
  var rw = round(random(100, 160));
  var rh = round(random(30, 50));
  var rCol = generateRandomHex();


  background(bgColor);
  fill(c1Col);
  ellipse(c1x, c1y, c1r, c1r);
  fill(c2Col);
  ellipse(c2x, c2y, c2r, c2r);
  fill(rCol);
  rect(rx, ry, rw, rh);

  line(0, 0, c1x, c1y);
  line(0, 0, c2x, c2y);

  fill("#2874A6");
  rect(0, 400, 800, 400);

  fill("white");

  var ofset = 20;
  textSize(14);
  text("Circle I։", 20, textPos);
  text("r " + c1r, 40, textPos += ofset);
  text("x " + c1x, 40, textPos += ofset);
  text("y " + c1y, 40, textPos += ofset);
  text("color " + c1Col, 40, textPos += ofset);
  //textPos += ofset

  textPos = 440;
  text("Circle II։", 140, textPos);
  text("r " + c2r, 160, textPos += ofset);
  text("x " + c2x, 160, textPos += ofset);
  text("y " + c2y, 160, textPos += ofset);
  text("color " + c2Col, 160, textPos += ofset);
  //textPos += ofset
	textPos = 440;
  
  text("Rectangle։", 280, textPos);
  text("x " + rx, 300, textPos += ofset);
  text("y " + ry, 300, textPos += ofset);
  text("w " + rw, 300, textPos += ofset);
  text("h " + rh, 300, textPos += ofset);
  text("color " + rCol, 300, textPos += ofset);
  
  
  textSize(8);
  var timestamp  = new Date().toUTCString();
  text(timestamp, 680, 590);
}


function generateRandomHex() {
  var flatColors = ["#1ABC9C",
    "#16A085",
    "#2ECC71",
    "#27AE60",
    "#3498DB",
    "#2980B9",
    "#9B59B6",
    "#8E44AD",
    "#34495E",
    "#2C3E50",
    "#F1C40F",
    "#F39C12",
    "#E67E22",
    "#D35400",
    "#E74C3C",
    "#C0392B",
    "#ECF0F1",
    "#BDC3C7",
    "#95A5A6",
    "#7F8C8D"
  ];
  //return '#'+Math.floor(Math.random()*16777215).toString(16);
  return random(flatColors);
}