class Box
{

 constructor(x,y)
 
 {
   var options = {
    
    isStatic : true
   }
   
 this.body=Bodies.rectangle(x,y,15,130, options);
 this.width=20;
 this.height=130;
 World.add(world,this.body);

 }


   display()
  {
   var pos=this.body.position;
   var angle=this.body.angle;
   push();
   translate(pos.x,pos.y);
   rectMode(CENTER)
    fill("red");
    
    rect(0,0,this.width,this.height);

   pop();
  }
}