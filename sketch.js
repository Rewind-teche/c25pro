
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var box1,box2,box3
var ground

function preload()
{
	
}


function setup() {
	createCanvas(800, 500);
    rectMode(CENTER);
	
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(20,480,20)
	
	ground = new Ground(width/2,490)
	
	box1 = new Base(700,475,150,10)
	box2 = new Bucket(615,410,20,150)
	box3 = new Bucket(785,410,20,150)
 	
	Engine.run(engine);
  
}


function draw() {
  background(255,255,255);
  Engine.update(engine)
 
  ground.display();

  box1.display();
  box2.display();
  box3.display();


  ball.display();
  keyPressed();
}

function keyPressed()
{
	
		if (keyCode === UP_ARROW) {
		   // Look at the hints in the document and understand how to make the package body fall only on
		  Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:-5})
		 }
	   	
}

