class box {
   constructor (x,y,width,heigth){
   
    var option = {
        'restitution':0.8,'friction':0.3,'density':1
} 
this.body=BODIES.rectangle(x,y,width,heigth,option);
WORLD.add(MyWorld,this.body);


}
display(){
    var pos=this.body.position;
    var angle= this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.heigth);

pop();
}
}

