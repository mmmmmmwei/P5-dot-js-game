function Pipes(){
  
  var spacing=random(50,120);
  /*var centery=random(spacing,height-spacing);*/
  
  /*this.top=centery-spacing/2;*/
  this.bottom=height-spacing;
  this.x=width;
  this.w=50;
  this.speed=2;
  
  this.hits=function(bird){
    if (/*bird.y<this.top ||*/ bird.y+50>this.bottom){
      if (bird.x+10>this.x && bird.x-20<this.x+this.w){
        return true;
    }
  }
  else{
  return false;}
  }
  
  this.show=function(){
    noStroke();
    fill(255);
    
    /*rect(this.x,0,this.w,this.top)*/;
    rect(this.x,this.bottom,this.w,this.bottom);

  }
  
  this.update=function(){
    this.x-=this.speed;
  }
  
  this.offscreen=function(){
    if (this.x<-this.w){
      return true;
    }
    else{
      return false;}
  }
}