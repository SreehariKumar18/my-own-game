const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pocket1;
var pocket2;
var striker;

function setup(){ 
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
pocket1 = Bodies.rectangle(200,10,200,50);
World.add(world,pocket1);
pocket2 = Bodies.rectangle(200,390,200,50);
World.add(world,pocket2);

striker = new blue();
}

function draw(){
    background("blue");
    Engine.update(engine);
    rectMode(CENTER);
    rect(200,10,200,50);
    rect(200,390,200,50);
    striker.display();
}
