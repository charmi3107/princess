var bg,bg2,form,system,code,security;
var score=0;
var scary;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  
}

function setup() {
  createCanvas(1500,700);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  textSize(18);
  text("Score : "+score,650,40);
  fill("white");
  
  if(score === 4){
    clear();
    background(bg2);
    fill("GREEN");
    textSize(40);
    text("TREASURE UNLOCKED",550,500);
  }
    
  
  drawSprites();
}
