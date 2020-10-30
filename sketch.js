var survivalTime=0;
var monkey,monkey_running;
var ground,banana,bananaImage,bananaGroup;
var obstacles , obstacleGroup , foodGroup;
var PLAY=1;
var END=0;
var gameState=PLAY;

var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
 createCanvas(600,200);

  var message="this is a message";
  console.log(message);
  
   monkey = createSprite(80,344,20,20);
   monkey.addAnimation("moving",monkey_running);
   monkey.scale = 0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=new Group();
  obstaclesGroup=new Group();
  
  score=0;
  
}


function draw() {
  stroke("white");
  textSize(20);
  fill("black");
  text("Score: "+score,500,50);
  
   if (frameCount%300===0){
    obstacles = createSprite(300,random,10,40);
    obstacles.y=Math.round(random(120,240));
    obstacles.addImage(obstacleImage);
    obstacles.velocityX=-6;
    obstacles.scale=0.16;
    obstacles.lifetime=150;
    obstaclesGroup.add(obstacles); 
  } 
  
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime=Math.round(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50);
  
  if (frameCount%80===0){
     banana=createSprite(300,random,10,40);
     banana.y=Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.velocityX=-8;
     banana.scale=0.2;
     banana.lifetime=80;
     
     bananaGroup.add(banana);
  }
  
if(ground.x<0){
   ground.x=ground.width/2;
  
  if (keyDown("space")){
  monkey.velocityY=-12;
}
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  food();
  stones();
}
drawSprites();
}

function food(){
  if (frameCount%80===0){
     banana.createSprite(300,random,10,40);
     banana.y=Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.velocityX=-8;
     banana.scale=0.5;
     banana.lifetime=80;
     
     bananaGroup.add(banana);
  }
}

function stones(){
   obstacles = createSprite(300,random,10,40);
   obstacles.y=Math.round(random(120,240));
   obstacles.addImage(obstacleImage);
   obstacles.velocityX=-6;
   obstacles.scale=0.16;
   obstacles.lifetime=150;
   obstaclesGroup.add(obstacles);
}








