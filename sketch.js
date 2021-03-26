const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground,ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

 var options = {
   isStatic: true
 }


  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(myWorld,ground);

 var ball_options = {
   restitution: 1
 }

  ball = Bodies.rectangle(200,100,50,50,ball_options);
  World.add(myWorld,ball);
}

function draw() {
  background(0);  
  
  Engine.update(myEngine);
  rectMode(CENTER);

  rect(ground.position.x, ground.position.y,400,20);
  rect(ball.position.x,ball.position.y,50,50);
}