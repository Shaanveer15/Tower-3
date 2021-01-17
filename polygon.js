class Polygon{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //his.rect = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      
      display(){
          push();
        var angle = this.body.angle;

        rotate(angle);
       rectMode(CENTER);
       fill ("red");
    
            rect( this.body.position.x, this.body.position.y, 50, 50);
      pop ();
          }

      }