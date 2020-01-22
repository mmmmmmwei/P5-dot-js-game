function Birds(){
  this.y=height-50;
  this.x=40;
  
  this.show=function(){
    noStroke();
    fill(255);
    ellipse(this.x,this.y, 29, 29);
    rect(this.x-5, this.y+15, 10, 20);
    rect(this.x-20,this.y+15,40,5);
    rect(this.x-10, this.y+30, 20, 5);
    rect(this.x-10,this.y+30,5,20);
    rect(this.x+5,this.y+30,5,20);
    
  }
  
  /*this.up=function(){
    micLevel = mic.getLevel();
    this.velocity= height-micLevel*height*5;
  }*/
  
  this.update=function(){
    vol = mic.getLevel(0.9);
    /*this.velocity+=this.gravity;
    this.velocity*=0.9;*/
    this.y=height-vol*1000;
    
    if(this.y>height-50){
      this.y=height-50;
      /*this.velocity=0;*/
  }
      if(this.y<0){
      this.y=0;
      /*this.velocity=0;*/
  }

  }
}