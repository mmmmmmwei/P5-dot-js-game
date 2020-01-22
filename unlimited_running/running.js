var bird;
var key;
var pipe=[];
var mic;
/*var sliderTop;
var sliderBottom;
var clapping=false;*/
var score=0;
var started = false;

function setup() { 
  createCanvas(900, 600);
  mic=new p5.AudioIn();
  mic.start();
  bird=new Birds();
  pipe.push(new Pipes());
 /*sliderTop=createSlider(0,1,0.2,0.01);
  sliderBottom=createSlider(0,1,0.2,0.01);*/
  noLoop();
}

function draw() {
  if(started){
background(0);
  fill(255, 255, 255);
  noStroke();
  arc(30, 30, 25, 20, PI + TWO_PI, TWO_PI);
  arc(40, 30, 25, 45, PI + TWO_PI, TWO_PI);
  arc(55, 30, 25, 35, PI + TWO_PI, TWO_PI);
  arc(70, 30, 30, 20, PI + TWO_PI, TWO_PI);
  
  arc(150, 150, 25, 20, PI + TWO_PI, TWO_PI);
  arc(160, 150, 25, 45, PI + TWO_PI, TWO_PI);
  arc(175, 150, 25, 35, PI + TWO_PI, TWO_PI);
  arc(190, 150, 30, 20, PI + TWO_PI, TWO_PI);

  arc(380, 250, 25, 20, PI + TWO_PI, TWO_PI);
  arc(390, 250, 25, 45, PI + TWO_PI, TWO_PI);
  arc(405, 250, 25, 35, PI + TWO_PI, TWO_PI);
  arc(420, 250, 30, 20, PI + TWO_PI, TWO_PI);
  
  arc(500, 50, 25, 20, PI + TWO_PI, TWO_PI);
  arc(510, 50, 25, 45, PI + TWO_PI, TWO_PI);
  arc(525, 50, 25, 35, PI + TWO_PI, TWO_PI);
  arc(540, 50, 30, 20, PI + TWO_PI, TWO_PI);
  
  arc(750, 200, 25, 20, PI + TWO_PI, TWO_PI);
  arc(760, 200, 25, 45, PI + TWO_PI, TWO_PI);
  arc(775, 200, 25, 35, PI + TWO_PI, TWO_PI);
  arc(790, 200, 30, 20, PI + TWO_PI, TWO_PI);
  
textSize(80);
fill('#fae');
text(round(score), 80, 80);

var vol=mic.getLevel();

  for (var i=pipe.length-1; i>=0; i--) {
  if (pipe[i].hits(bird)) {
 fill(0, 255, 0);
  textSize(20);
text("GAME OVER! Refresh to play again",300,300);
noLoop();
    }
    pipe[i].show();
    pipe[i].update();
    
    if (pipe[i].offscreen()) {
      pipe.splice(i, 1);
    }
    
    if(bird.x>pipe[i].w+pipe[i].x){
      score=score+(1/20);
    }

  }

  bird.update();
  bird.show();

  if (frameCount%200==0)
  {
    pipe.push(new Pipes());
  }

  fill(0,255,0)
  var y=map(vol,0,1,height,0);
  rect(width-50,y,50,height-y);
  
  /*var thresholdTop=sliderTop.value();
  var thresholdBottom=sliderBottom.value();
  
  var ty=map(thresholdTop,0,1,height,0);
  stroke(255,0,0);
  strokeWeight(4);
  line(width-50,ty,width,ty);
  
  var by=map(thresholdBottom,0,1,height,0);
  stroke(0,0,255);
  strokeWeight(4);
  line(width-50,by,width,by);*/
  
    /*if (vol>5)
      
  if (vol>thresholdTop && !clapping){
    bird.up();
    clapping=true;
  }
    if (vol<thresholdBottom){
clapping=false;
  }*/
 
}
}

    /*function keyPressed() {
      if (key==0) {
        bird.up();
      }
    }*/
    
    function start(){
   started = true;
   loop();
}