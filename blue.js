class blue{
    contructor(){
        var options={
            friction:0.5,
            density:0.5
        }
        this.body = Bodies.circle(200,200,10,10,options)
        this.width=20;
        this.height-20;
        this.image=loadImage("images/Red_coin.png")
        World.add(world,this.body)
    }
    display(){
        ellipseMode(CENTER);
        ellipse(200,200,this.width,this.height)
    }
  
}
