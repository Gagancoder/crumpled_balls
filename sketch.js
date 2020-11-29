//CONSTANT'S
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//VARIABLES{

//Variable of Paper
var paper;

//Variable of Ground
var ground,ground1,ground2,ground3;

//Variable of Dustbin
var D1,D2,D3;

//}

//PRE_LOAD FUNCTION
function preload()
{
 	
}
//SET_UP FUNCTION
function setup() 
{
	//Canvas Size
	createCanvas(1530, 760);
     //Engine and World
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.{

	//Creating Ground
	ground1 = new Ground(100,745,2860,30)
	ground2 = new Ground(100,22,2860,30)
	ground = new Ground(1515,400,30,900)
	ground3 = new Ground(22,400,30,900)
	
	//Creating Dustbin
	D1= new Dustbin(900,380,200,20);
	D2=new Dustbin(800,315,20,150);
    D3=new Dustbin(1000,315,20,150);

   //Creating Ball
	paper= new Paper (100,700,50);

	//   }

//Creating Engine
	Engine.run(engine);
  
}

//Draw Functon (where i draw all the objects)
function draw() 
{
  rectMode(CENTER);
  background(255);

  
  
  
  drawSprites();
//Displaying Ball 
  paper.display();
//Displaying Ground  
 ground.display();
 ground1.display();
 ground2.display();
 ground3.display();
//Displaying Dustbin 
 D1.display();
 D2.display();
 D3.display();
}
//Moving MY Ball Function
function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200});

	}
	if(keyCode === RIGHT_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:0});

	}
	if(keyCode === LEFT_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:-200,y:0});

	}
	if(keyCode === DOWN_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:-200,y:200});

	}
	




}