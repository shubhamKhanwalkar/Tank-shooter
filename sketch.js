
var player,enemy,ground,enemy,backgroundImg,enemyImg,playerImg;
var bg ;
var enemyCount = 0;
var bulletImg;
var gameState = 0;
var bg2 = "bg1.jpg";
function preload() {
  backgroundImg = loadImage(bg2);
  enemyImg = loadImage("tke.png");
  playerImg = loadImage("tk.png");
  bulletImg = loadImage("Bullet.jpg");
  bg = loadImage("bg.jpg");

}

function setup() {
  

  createCanvas(1200,400);
 
  player = createSprite(200,346,150,75);
  player.addImage(playerImg);
  player.scale = 0.15;
 
 
  
}

function draw() {
  
 

if (gameState === 0) {
  background(bg);
  textSize(20);
 // textAlign(CENTER);
  fill ("Blue");
  text ("There is a war going on between 2 countries,you are on a mission to protect your country.\n Destroy enemy tankers and complete the mission.",70,100);
  fill ("yellow");
  text ("Press 'space' to shoot the bullets.\n Press 'up arrow' and 'down arrow' key to control your tank",80,150);
  var button = createButton("PLAY"); 
  button.position(200,300);

  button.mousePressed(function(){
    removeElements();
   // button.hide();
    gameState = 1;
  })

}











if (gameState === 1){
  if (keyDown(DOWN_ARROW)) {
    player.y+=10;
  }
 
  if(keyDown(UP_ARROW)){
    player.y-=10;
  }
  createEnemy();

  background(backgroundImg);  
 

  if (keyDown("SPACE")){
    bullets(player,10);
  }
  

  drawSprites();
}







 

}

function createEnemy(){
if(frameCount %200 === 0 && enemyCount<11 ){
  var yValue = random(70,370) ;
  enemy = createSprite(1300,yValue,150,75);
  enemy.addImage(enemyImg);
  enemy.scale = 0.25;
  enemy.velocityX = -3;
  enemyCount +=1;
  enemy.lifeTime = 450;
  
 // for(var i = 0;i<3;i++){
  //  bullets(enemy);
 // }
}
}

function bullets(tanker,v){
var bullet = createSprite(tanker.x,tanker.y,10,10);
bullet.velocityX = v;
bullet.addImage(bulletImg);
bullet.scale = 0.015;

}
