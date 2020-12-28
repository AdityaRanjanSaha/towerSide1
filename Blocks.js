class Blocks {
  constructor(x,y,width,height,angle) {
    var options = {
        isStatic: false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    //this.body.angle = angle;
    this.width = width;
    this.height = height;
    World.add(world, this.body);
   
  }
  display(){
    var angle = this.body.angle;
    console.log (angle);
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    //rect(this.body.position.x, this.body.position.y, this.width, this.height);
    rect(0,0, this.width, this.height);
    pop();
  }
};
