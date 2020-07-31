class Base
{
    constructor(x,y,width,height)
    {
        var options =
        {
           isStatic:true,
           density : 1.3,
           friction : 1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width =width;
        this.height = height;
        this.image = loadImage("dustbin.png")

        World.add(world,this.body);
    }

    display()
    {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke ("white")
      fill("white");
      rect(0, 0, this.width, this.height);
      imageMode(CORNER);
      image(this.image, -80,-160,160,170);
      pop();

    }
}