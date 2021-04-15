var girl, monkey, coconut, crab, island;

function preload(){
  girlImg = loadImage('runningGirl.png');
  monkeyImg = loadImage('monkey.png');
  coconutImg = loadImage('coconut.png');
  crabImg = loadImage('angryCrab.png');
  islandImg = loadImage('island.png');
}

function setup(){
  canvas = createCanvas(800,400);

  island = createSprite(350,260,100,100);
  island.addImage(islandImg);
  island.velocityX=-3;

  girl = createSprite(100,320,50,50);
  girl.addImage(girlImg);
  girl.scale=0.3;
}

function draw(){
  background("blue");
  console.log(island.x);

  if(island.x<300){
    island.x=1000;
  }
  drawSprites();
}