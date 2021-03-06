function Birds(){
  this.y=height/2;
  this.x=40;
  this.gravity=0.6;
  this.velocity=0;
  this.lift=-20;
  
  this.show=function(){
    noStroke();
    fill(255);
    ellipse(this.x,this.y,15,15);
  }
  
  this.up=function(){
    this.velocity+= this.lift;
  }
  
  this.update=function(){
    this.velocity+=this.gravity;
    this.velocity*=0.9;
    this.y+=this.velocity;
    
    if(this.y>height){
      this.y=height;
      this.velocity=0;
  }
      if(this.y<0){
      this.y=0;
      this.velocity=0;
  }

  }
}