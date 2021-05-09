class paper
{
	constructor()
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
			}

		this.body=Bodies.circle(200,450,70/2, options);
		this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER);
			image(this.image,0,0,110,110);
			pop()
			
	}

}