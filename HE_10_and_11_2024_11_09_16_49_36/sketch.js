let imageArray = [];
let font1;

function preload() {
  font1 = loadFont("Fredoka_Expanded-Regular.ttf");
  imageArray[0] = loadImage('fish.png');
  imageArray[1] = loadImage('bubbles.png');
  imageArray[2] =loadImage('seagull.png');
  imageArray[3] =loadImage('background.png');
  imageArray[4] = loadImage('symphony.png');
  sound = loadSound("symphony.mp3");
}

function setup() {
  var canvas = createCanvas(400, 400);
  background('#4ea0db');
  canvas.parent("main-sketch");
  
   var button4 = createButton('Background');
  button4.parent('button-holder');
  button4.mousePressed(drawBackground); 
  
  var button1 = createButton('Fishy');
  button1.parent('button-holder');
  button1.mousePressed(drawFish); 
  
  var button2 = createButton('Bubbles');
  button2.parent('button-holder');
  button2.mousePressed(drawBubble); 
  
   var button3 = createButton('Birb');
  button3.parent('button-holder');
  button3.mousePressed(drawSeagull);
  
   var button7= createButton('Surprise!');
  button7.parent('button-holder');
   button7.mousePressed(randomDraw);
  
  
    var button5 = createButton("Clear Screen");
  button5.parent("button-holder");
  button5.mousePressed(clearScreen);
  
    var button6 = createButton("Save Screen")
  button6.parent("button-holder");
  button6.mousePressed(saveScreen);

  
  
  frameRate(60);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  
}

function drawBackground() {
 image(imageArray[3], 200, 200, 400, 400);
}

function drawFish() {
  image(imageArray[0], random(width), random(height), 100, 100);
}

function drawSeagull(){
   image(imageArray[2], random(width), random(height), 150, 150);
}

function drawBubble() {
  image(imageArray[1], random(width), random(height), 50, 50);
}

function clearScreen() {
  background('#4ea0db');
}

function saveScreen(){
  save("image.png")
}

function randomDraw() {
  let ranImg = int(random(imageArray.length));
  image(imageArray[ranImg], random(width), random(height), 50, 50);
}

function mousePressed() {
  if (mouseX < width && mouseX > 0) {
    if (mouseY < height && mouseY > 0) {
      image(imageArray[4], mouseX + 50, mouseY + 50, 400, 400);
      sound.play();
    }
  }
}
