var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,440);
 monkey = createSprite(80,315,20,20); 
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
  
 ground = createSprite(400,350,900,10);
 ground.valocityX=-4;
 ground.x=ground.width/2;
 console.log(ground.x);
var Survivaltime=0
stroke("red");
textSize(20);
fill("red");
text("score :"+ score,500,50);

stroke("black");
textSize(20);
fill("black");
Survivaltime=Math.ceil(frameCount/frameRate());
text("Survival time:"+ Survivaltime,100,50);
  
 bananaGroup =new Group();
 obstaclesGroup =new Group();
}


function draw() {
background("white");

if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    } 
 if(obstaclesGroup.isTouching(monkey)){
        gameState = END;
    }  

else if (gameState === END) {
       monkey.velocityY=0 
       monkey.velocityX=0
       banana.velocityY=0;
       banana.velocityX=0;
       obstacle.velocityX=0;
       obstaclesGroup.setVelocityXEach(0);
       bananaGroup.setVelocityXEach(0);
}  
  else if (bananaGroup.isTouching(monkey)){
  
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
   
spawnObstacles();  
spawnbanana();
drawSprites();  
}
function spawnbanana(){
  if (frameCount % 60 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(100,140));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    //assign lifetime to the variable
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
}
function spawnObstacles() {
  if(frameCount % 90 === 0) {
    obstacle = createSprite(600,315,10,40);
     var rand = Math.round(random(1));
    switch(rand) {
      case 1: obstacle.addImage(obstaceImage);
             obstacle.scale = 0.2;
             obstacle.velocityX = -3;
             obstacle.lifetime = 200;
              break;}
    obstaclesGroup.add(obstacle);
}
}