class Boat {
  constructor(x, y, width, height,) {
    var options = {
      restitution: 0.8,
      friction:1.0,
      density:1.0
  };


    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    
    this.boatPosition= boatPos;
    this.image = loadImage("assets/boat.png");
    
    World.add(world, this.body);
  }


  display() {
   
    var pos = this.body.position;
  
    push();

    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,this.boatPosition,this.width,this.height);
    noTint();
    pop();
    
  }
}
