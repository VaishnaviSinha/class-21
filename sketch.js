var rect1,rect2,rect3;


function setup() {  


  createCanvas(800,400);
 rect1= createSprite(700, 200, 50, 50);
 rect1.shapeColor="green";
 rect2= createSprite(400, 200, 50, 50);
 rect2.shapeColor="green";
 //rect1.debug=true;
 //rect2.debug=true;
 rect3= createSprite(200, 200, 50, 50);
 rect1.velocityX=-2;
 rect2.velocityX=2;

}

function draw() {
  background(0); 
  //rect1.x=mouseX;
 // rect1.y=mouseY;
  
 if(hasTouched(rect1,rect2)) {
    rect1.shapeColor="red";
    rect2.shapeColor="red";

  } 
  
  
  else if(hasTouched(rect1,rect3)) {
    rect1.shapeColor="red";
    rect3.shapeColor="red";

  }
  else{
    rect1.shapeColor="green";
    rect2.shapeColor="green";
    rect3.shapeColor="green";
  }
  
  bounceBack(rect1,rect2);
  drawSprites();
}
