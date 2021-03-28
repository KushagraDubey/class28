class Chain {
    constructor(bodyA,pointB){
        var coption = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }
        this.pointB = pointB
         this.chain = Constraint.create(coption);
        World.add(world,this.chain);
     }
    display(){
        if(this.chain.bodyA ){
        var pointA = this.chain.bodyA.position;
       // var pointB = this.pointB;
        strokeWeight(3);
    line(pointA.x,pointA.y,this.chain.pointB.x,this.chain.pointB.y);
    }
    }
 fly(){
    this.chain.bodyA = null;
}
}