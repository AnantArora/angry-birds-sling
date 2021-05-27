class slingshot{

    constructor(bodya,bodyb){

var options={
    bodyA:bodya,
    bodyB:bodyb,
    length:10,
    stiffness:0.2
}
this.rope= Constraint.create(options)
World.add(world,this.rope)

    }
    display(){
        stroke("brown")
        strokeWeight(4)
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
    }
}