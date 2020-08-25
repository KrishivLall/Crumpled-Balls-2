
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	dustbinIMG = loadImage("sprites/dustbin.png")
	
}

function setup() {
	
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ball = new Ball(10,200,30);

	box1 = new Box(470, 340, 20, 100);
  box2 = new Box(400, 370, 150, 20);
  box3 = new Box(340, 340, 20, 100);
  
	ground = new Ground(200,390,1500,20);
}

function draw() {

  rectMode(CENTER);
  background(225);
  
  drawSprites();
 
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  
  ball.display();

  imageMode(CENTER);
  image(dustbinIMG, 400, 340, 170, 120 );
  
}

function keyPressed(){

if(keyCode === UP_ARROW){
  Matter.Body.applyForce(ball.body, ball.body.position,{x:115, y:-115} )
}

}


