const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	dustbinObj=new dustbin(1315,585);

	paperObject=new paper();
	
	//Create a Ground
	groundObject=new ground(width/2,670,width,20);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:350,y:-235});
    
	  }
	if(keyCode===LEFT_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-285,y:-210});
	}

}





