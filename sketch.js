const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic : true
  }
  
  ground=Bodies.rectangle(0, 390, 1600, 20, options);
  World.add(world, ground);

  var options2={
    restitution : 1,
    density : 2,
    friction : 1
  }
  ball=Bodies.circle(400, 200, 20, options2);
  World.add(world, ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("blue");
  rectMode(CENTER);
 rect(ground.position.x, ground.position.y, 1600, 20);
 ellipseMode(RADIUS);
 fill("red");
 ellipse(ball.position.x, ball.position.y, 20, 20);
}