const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;

var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(925,350,70,70);
    box2 = new Box(1125,350,70,70);

    box3 = new Box(925,250,70,70);
    box4 = new Box(1125,250,70,70);

    box5 = new Box(1025,180,70,70);

    ground = new Ground(600,height,width,20)

    pig1 = new Pig(1025,350);
    pig2 = new Pig(1025,250);

    bird = new Bird(mouseX,mouseY);

    log1 = new Log(1025,300,270,PI/2);
    log2 = new Log(1025,200,270,PI/2);

    log3 = new Log(950,150,150,PI/7);
    log4 = new Log(1100,150,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/

    box1.display();
    box2.display();

    box3.display();
    box4.display();

    box5.display();

    pig1.display();
    pig2.display();

    bird.display();

    log1.display();
    log2.display();

    log3.display();
    log4.display();

    ground.display();
}