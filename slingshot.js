class Slingshot{
constructor(bodyA,pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 5
}
this.pointB=pointB;
this.sling =Constraint.create(options);
World.add(world,this.sling);
}
fly(){
    this.sling.bodyA = null;
}

display(){
    if(this.sling.bodyA){
    stroke("skyblue");
    strokeWeight(5);
    var  point1=this.sling.bodyA.position;
    var point2=this.pointB;
    line(point1.x,point1.y,point2.x,point2.y);}
    push()
    textSize(20);
    textFont("Times New Roman")
    strokeWeight(5)
    stroke("purple");
     fill("white")
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",50,50)
    pop()
    }
}
