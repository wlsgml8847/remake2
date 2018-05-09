var img;
var area = 30;
var count=1;

function setup() {
  createCanvas(772, 485);
  background(255);
  noStroke();
  smooth();
  img = loadImage("assets/pica.png");
  img.loadPixels();
}

function draw() {
  image(img, 386, 0);

  if (count==1) {
    circle();
  }
  if (count==2) {
    tri();
  }
  if (count==3) {
    qua();
  }
}

function tri() {
  frameRate(60);
  var x = int(mouseX);
  var y = int(mouseY);
  var loc = img.get(x, y);

  fill(loc, 200);

  triangle(x, y, x+random(area), y+random(area), x-random(area), y-random(area) );
}

function circle() {
  frameRate(60);
  var x = int(mouseX);
  var y = int(mouseY);

  var loc = img.get(x, y);
  fill(loc, 200);
  ellipse(x, y, random(area), random(area));
}

function qua() {
  frameRate(60);
  var x = int(mouseX);
  var y = int(mouseY);

  var loc = img.get(x, y);
  fill(loc, 200);
  rect(x, y, random(area), random(area));
}

function keyPressed() {
  if (keyCode==LEFT_ARROW) {
    count=1;
    redraw();
  }
  if (keyCode==RIGHT_ARROW) {
    count=2;
    redraw();
  }
  
  if (keyCode==UP_ARROW) {
    area+=5;
  }

  if (keyCode==DOWN_ARROW) {
    count=3;
    redraw();
  }
}