const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof,chain1,bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


	Engine.run(engine);
	roof = new Roof(400,100,700,50)
	bobObject1 = new Bob(170,400);
	bobObject2 = new Bob(250,400);
	bobObject3 = new Bob(330,400);
	bobObject4 = new Bob(410,400);
	bobObject5 = new Bob(490,400);


	
	
	chain1 = new Chain(bobObject1.body,{x:170, y:100});
	chain2 = new Chain(bobObject2.body,{x:250, y:100});
	chain3 = new Chain(bobObject3.body,{x:330, y:100});
	chain4 = new Chain(bobObject4.body,{x:410, y:100});
	chain5 = new Chain(bobObject5.body,{x:490, y:100});
	
 
	
}
	


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  
  
  
  

 
}
function keyPressed(){
		if(keyCode===32){
			Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100})
		}

}


