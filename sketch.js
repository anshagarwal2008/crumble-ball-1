
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball1;
var log1,log2,log3;

function setup() {
	createCanvas(800, 400);
 

	engine = Engine.create();

	world = engine.world;

	log1 = new log(600,390,100,10);
	log2 = new log(550,370,10,100);
	log3 = new log(650,370,10,100);
	ground = new log(400,400,800,10);
	ball1 = new ball(200,280,20,20);


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball1.display();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(ball1.body,ball1.body.position,{x:35,y:-35});
	 }
	 }



