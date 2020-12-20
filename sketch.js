var bullet, bulletSpeed,bulletWeight;
var wall, thickness;
var damage;

function setup() {
  createCanvas(1200,400);
  bulletSpeed = random(55,90);
  bulletWeight = random(400,1500);
  thickness = random(22,83);
  //height = random(300,400);
  height = 800;
  bullet = createSprite(100, 200, 40, 20);
  wall = createSprite(1100, 200, thickness, height/2);
  bullet.velocityX = bulletSpeed;  
  damage = (0.5*bulletWeight*bulletSpeed*bulletSpeed)/(thickness*thickness*thickness)
  
}

function draw() {
  background("black"); 

  if(bullet.collide(wall)){
      if(damage > 10 ){
        bullet.shapeColor = color("red");
        wall.shapeColor = color("red");
        

      }
      if (damage < 10) {
        bullet.shapeColor = color("green");
        wall.shapeColor = color("green");
        
      } 
    } 
    drawSprites();
  
}