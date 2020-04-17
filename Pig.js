class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.v  =255;
  }
display(){
if(this.body.speed<3){
  super.display();
}
else{
  push();
  this.v-=5;
  tint(255,this.v);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
  pop();
  World.remove(world,this.body);
}

}
};