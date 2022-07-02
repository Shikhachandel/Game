let ball_x,ball_y,ball_dx,ball_dy,ball_radius;
let paddle_x,paddle_y,paddle_width,paddle_height,paddle_dx;
let score=0,life=3,l=1,k=1,level=1;
let grid=[]

function setup() {
  grid = [];
  createCanvas(400, 400);
  //ball
  ball_y=height/2;
  ball_x=width/2;
  ball_dx=2;
  ball_dy=2;
  ball_radius=26;
 
  //paddle
  paddle_x=(width/2)-(80/2);
  paddle_y=height-20;
  paddle_width=80;
  paddle_height=15;
  paddle_dx=2;  
  
 //bricks
 for(let i=0;i<l;i++){
   let row=[]
   for(let j=0;j<k;j++){
     let block=[];
     block["x"]=i*95+ 10;
     block["y"]=j*35+ 10;
     block["width"]=random(70,80);
     block["height"]=random(15,20);
     row.push(block);
   }
   grid.push(row);
 }
}
function draw(){
  background("black");
 
  //ball speed
  ball_x+=ball_dx;
  ball_y+=ball_dy;
 
  //ball
  fill("yellow");
  strokeWeight(4);
  stroke("orange");
  circle(ball_x,ball_y,ball_radius);
  
  //paddle
  fill("white");
  strokeWeight(4);
  stroke("");
  rect(paddle_x,paddle_y,paddle_width,paddle_height);
  
  //block
  fill("brown");
  strokeWeight(4);
  noStroke();
  for (var i = 0; i < l; i++) {
     for(var j=0;j<k;j++){
       rect(grid[i][j].x,grid[i][j].y,grid[i][j].width,grid[i][j].height);
     }
  }
  
  //text
  fill("blue")
  strokeWeight(4);
  stroke("pink");
  //score
  text("Score:  "+score,width-50,20)
 
  //life
  text("life:  "+life,width-50,40)
  
  //level
  text("level:  "+level,width/2,height/2)
  
  //paddle movement
  if(keyIsDown(RIGHT_ARROW)){
    if(paddle_x+paddle_width==width)
      {
        paddle_x=width-paddle_width;
      }
    else{
      paddle_x+=paddle_dx;
      }
  }
   
  if(keyIsDown(LEFT_ARROW)){
    if(paddle_x==0)
    {
      paddle_x=0;
    }
    else
    {
      paddle_x-=paddle_dx;
    }    
  }
 
  //bricks
  for(var i=0;i<l;i++){
    for(var j=0;j<k;j++){
      //block
if(ball_x>=grid[i][j].x && ball_x<=grid[i][j].x+grid[i][j].width && ball_y+ball_radius/2>=grid[i][j].y && ball_y+ball_radius/2<=grid[i][j].y+grid[i][j].height){
ball_dy = -ball_dy;
score+=1;
grid[i][j].width = 0;
grid[i][j].height=0;
  if(score==(l*k)){
    alert("Hurray!Won this level!");
    if(l<=k && l<4){
         l+=1;
      alert("Play next Level");
      life=3;
      level+=1;
      score=0;
      }
    else if(l>k && k<4){
      k+=1;
      alert("Play next Level");
      life=3;
      level+=1;
      score=0;
    }
    else {
      alert("You have finished all levels");
    }
    setup();
  }
}
//brick_bottom
if(ball_x>=grid[i][j].x && ball_x<=grid[i][j].x+grid[i][j].width && ball_y-ball_radius/2>=grid[i][j].y && ball_y-ball_radius/2<=grid[i][j].y+grid[i][j].height){
ball_dy = -ball_dy;
score+=1;
grid[i][j].width = 0;
grid[i][j].height=0;
  if(score==(l*k)){
    alert("Hurray!Won this level!")
    if(l<=k && l<4){
         l+=1;
      alert("Play next Level");
      life=3;
      level+=1;
      score=0;
      }
    else if(l>k && k<4){
      k+=1;
      alert("Play next Level");
      life=3;
      level+=1;
      score=0;
    }
    else{
      alert("You have finished all levels");
    }
    setup();
  }
}

//brick left
if(ball_y>=grid[i][j].y && ball_y<=grid[i][j].y+grid[i][j].height && ball_x+ball_radius/2>=grid[i][j].x && ball_x+ball_radius/2<grid[i][j].x + grid[i][j].width){
ball_dx = -ball_dx;
score+=1;
grid[i][j].width = 0;
grid[i][j].height=0;
  if(score==(l*k)){
    alert("Hurray!Won this level!");
    if(l<=k && l<4){
         l+=1;
      alert("Play next Level");
      life=3;
      level+=1;
      score=0;
      }
    else if(l>k && k<4){
      k+=1;
      alert("Play next Level");
      life=3;
      level+=1;
      score=0;
    }
    else{
      alert("You have finished all levels");
    }
    setup();
  }
}
//brick right
if(ball_y>=grid[i][j].y && ball_y<=grid[i][j].y+grid[i][j].height && ball_x-ball_radius/2>grid[i][j].x && ball_x-ball_radius/2<=grid[i][j].x+grid[i][j].width){
ball_dx = -ball_dx;
score+=1; 
grid[i][j].width = 0;
grid[i][j].height=0;
  if(score==(l*k)){
    alert("Hurray!Won the level!")
    if(l<=k && l<4){
         l+=1;
      alert("Play next Level");
      life=3;
      score=0;
      level+=1;
      }
    else if(l>k && k<4){
      k+=1;
      alert("Play next Level");
      life=3;
      score=0;
      level+=1;
    }
    else{
      alert("You have finished all levels");
    }
    setup();
  }
}
    }
  }
   
  //paddle
  if((paddle_x<=ball_x+(ball_radius/2)) && (paddle_x+paddle_width>ball_x-(ball_radius/2)) && (paddle_y<=ball_y+(ball_radius/2))){
     ball_dy=-(ball_dy);
     }
 
  //righeightt side and left
  if(((ball_x+(ball_radius/2))>=width) || ((ball_x-(ball_radius/2))<=0)){
    ball_dx=-(ball_dx);
  }  
  //bottom
  if(ball_y+(ball_radius/2)>=height){
    ball_y=height/2;
    ball_x=width/2;
    paddle_x=width/2;
    //life
    life-=1;
    if(life==0){
      //alert("Try till to you succeed");
      life=3;
      score=0;
      l=1;
      k=1;
      level=1;
      paddle_x=width/2;
      setup();
    }
  }
  //top
  if((ball_y-(ball_radius/2))<=0){
     ball_dy=-(ball_dy);
  }
}