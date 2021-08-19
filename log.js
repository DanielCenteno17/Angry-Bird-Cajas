class Log {
    constructor(x, y, angle, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 60, 20, options);
      this.width = 60;
      this.height = 20;
      Matter.Body.setAngle(this.body,angle);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      strokeWeight(4);
      stroke("green");
      rect(0, 0, 60, 20);
      pop();
    }
  };
  