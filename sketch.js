//declaring almost all the variables for the application
var splash,logo_a,add_a,logo,add;
var window1,showcase,bg2,hanger1,hanger2,hanger3,hanger_anime; 
var canvas,pallet1,one,two,three,boy1,boy2,boy3,dad1,dad2,dad3,sep;
var dad_scope,son_scope,greet,s1,s2,s3,s4,s5;
var text1,text2,text3,text4,text5,text6,bound1,bound2,cloud,input,input2,slider,slider2;
var x = 1,y=1,n = 0.25,z = 1;

//setting up the appStage and its components
var HOME = 1;
var CHARACTER = 2;
var SCENE1 = 4;
var SCENE2 = 5;
var SCENE3 = 6;
var COMMENTS = 3;
var appStage = HOME;

function preload(){
  //loaded all the Images for the app 
  splash = loadImage("giphy.gif")
  logo_a = loadImage("logo.png");
  add_a = loadImage("plus.png");
  card1 =loadImage("card1.png")
  card2 =loadImage("card2.png")
  card3 =loadImage("card3.png")
  bg2 = loadImage("bg2.jpg");
  hanger_anime = loadImage("hang.png");

  one = loadImage("image.jpg");
  two  =loadImage("market.jpg");
  // three = loadImage("");

  b1 = loadImage("b1.png")
  b2 = loadImage("b2.png")
  b3 = loadImage("b3.png")

  d1 = loadImage("d1.png")
  d2 = loadImage("d2.png")
  d3 = loadImage("d3.png")

  greet  = loadImage("greeting.png");
  s1 = loadImage("s1.png");

  dt1 = loadImage("dt1.png");

  cld = loadImage("sss.png")
  two = loadImage("two.jpg")
  three = loadImage("three.jpg")

  area = loadImage("area.png")
}

function setup() {
  //creating the canvas for the entire screen 
  createCanvas(window.innerWidth,window.innerHeight);

  //what all this app has to do in the hose Stage 
  if(appStage===HOME){
   y = 2

   //creating the logo
    logo = createSprite(width/2,height/6);
    logo.addImage(logo_a);
    logo.alpha = 0.1;
    // creating the text cloud and the plus button
    cloud = createSprite(width/2.2,height/1.8);
    cloud.addImage(cld)
    cloud.scale = 1.5

    add = createSprite(width/2.9,height/1.8);
    add.addImage(add_a);
    add.scale = 0.4;

    
 }
 // creating a lot's and lot's of sprites where commenting for each is not possible😢

  window1 = createSprite(width/5,height/1.65,width/6,height/1.7);
    window1.addImage(card1);
    window1.scale = 0.35;
    window1.visible = false;
  
    window2 = createSprite(width/2,height/1.65,width/6,height/1.7);
    window2.addImage(card2);
    window2.scale = 0.35;
    window2.visible = false;

    window3 = createSprite(width/1.25,height/1.65,width/6,height/1.7);
    window3.addImage(card3);
  window3.scale = 0.35;
  window3.visible = false;
  
    hanger1 = createSprite(window1.x+25,height/3)
    hanger1.depth = window1.depth-1;
    hanger1.addImage(hanger_anime);
  hanger1.visible = false;

  
    hanger2 = createSprite(window2.x+25,height/3)
    hanger2.depth = window1.depth-1;
    hanger2.addImage(hanger_anime);
  hanger2.visible = false;

  
    hanger3 = createSprite(window3.x+25,height/3)
    hanger3.depth = window1.depth-1;
    hanger3.addImage(hanger_anime);
  hanger3.visible = false;
 
  
  canvas = createSprite(width/2,height/3)
  canvas.addImage(one);
  canvas.scale =3;
  canvas.visible=false;
  
  pallet = createSprite(width/2,height/1.11,width,height/6);
  pallet.shapeColor = "white";
  pallet.visible = false;

  sep = createSprite(width/2,pallet.y,0.8,pallet.height);
  sep.shapeColor = "black";
  sep.visible = false;

  boy1 = createSprite(width/10,pallet.y);
  boy1.addImage(b1)
  boy1.scale = 1
  boy1.visible = false;
  
  boy2 = createSprite(width/4,pallet.y);
  boy2.addImage(b2);
  boy2.scale = 0.2
  boy2.visible=  false;

  boy3 = createSprite(width/2.5,pallet.y);
  boy3.addImage(b3)
  boy3.visible = false;
  
  dad1 = createSprite(width/1.65,pallet.y);
  dad1.addImage(d1);
  dad1.visible =false;
  
  dad2 = createSprite(width/1.3,pallet.y);
  dad2.addImage(d2);
  dad2.visible =false;
  

  dad3 = createSprite(width/1.1,pallet.y);
  dad3.addImage(d3);
  dad3.visible =false;

  greeting = createSprite(width/2,height/12,width/6,height/5);
  greeting.addImage(greet);
  greeting.scale = n;
  greeting.visible = false;

bound1 = createSprite(width/2,-10000,20,20);
// bound1.visible = false
bound1.addImage(s1)
bound1.scale = 0.8

bound2 = createSprite(width/2,-10000,20,20);
bound2.addImage(dt1)
// bound2.visible = false
bound2.scale = 0.8

//creating the two input boxes for the conversation
input = createInput();
input.position(20, -565);

input2 = createInput();
input2.position(20, -565);

slider = createSlider(0, 255, 20);
slider.position(10, -110);
slider.style('width', '100px');

slider2 = createSlider(0, 255, 20);
slider2.position(10, -110);
slider2.style('width', '100px');

}      

function draw() {   
  // setting up the background 
  background(splash);
 
  //what to do when mouse is pressed over the button↓↓
  if(mousePressedOver(add)){
    appStage = CHARACTER;
    console.log("btn works");
    removeSprite(logo);
    removeSprite(cloud)
  }

  //what is gonna happen in appstage `chacharacter`
  if(appStage===CHARACTER){
    background(bg2);
y=6;
// setting certain sprites visible
window1.visible = true;
hanger1.visible = true;

window2.visible = true;
hanger2.visible = true;

window3.visible = true;
hanger3.visible = true;
//?
 add.y =1000000;
 //making the buttons functionable
  if(mousePressedOver(window1)){
    appStage = SCENE1;
  }
  if(mousePressedOver(window2)){
    appStage = SCENE2;
  }
   if(mousePressedOver(window3)){
     appStage = SCENE3;
   }
  }
//let's enter in the appstage Secene1
  if(appStage===SCENE1){

    background(three);
x = 2
    removeSprite(window1);
    removeSprite(window2);
    removeSprite(window3);
    removeSprite(hanger1);
    removeSprite(hanger2);
    removeSprite(hanger3);

    // canvas.visible=true;
pallet.visible =true;
sep.visible =true;
 boy1.visible =true; 
 boy2.visible=true;
 boy3.visible =true;
dad1.visible =true;
dad2.visible =true;
dad3.visible =true;

if(mousePressedOver(boy1)){
  removeSprite(boy2);
  removeSprite(boy3)
  bound1.x = boy1.x+150;
  bound1.y = boy1.y-80;
boy1.y = mouseY;
boy1.x = mouseX;
}

if(mousePressedOver(boy2)){
  removeSprite(boy1);
  removeSprite(boy3)
  bound1.x = boy2.x+150;
  bound1.y = boy2.y-80;
  boy2.y = mouseY;
  boy2.x = mouseX;
  }

  if(mousePressedOver(boy3)){
    removeSprite(boy1);
    removeSprite(boy2)
    bound1.x = boy3.x+150;
  bound1.y = boy3.y-80;
    boy3.y = mouseY;
    boy3.x = mouseX;
    }

    if(mousePressedOver(dad1)){
      dad1.y = mouseY;
      dad1.x = mouseX;
      bound2.x = dad1.x-150;
        bound2.y = dad1.y-80;
      removeSprite(dad3);
  removeSprite(dad2)
      }

      if(mousePressedOver(dad2)){
        removeSprite(dad3);
        removeSprite(dad1)
        bound2.x = dad2.x-150;
        bound2.y = dad2.y-80;
        dad2.y = mouseY;
        dad2.x = mouseX;
        }

        if(mousePressedOver(dad3)){
          removeSprite(dad1);
          removeSprite(dad2)
          bound2.x = dad3.x-150;
        bound2.y = dad3.y-80;
          dad3.y = mouseY;
          dad3.x = mouseX;
          }

          if(boy1.y<pallet.y){
            boy1.scale  =2;
          }

          if(boy2.y<pallet.y){
            boy2.scale  =0.3;
          }
          if(boy3.y<pallet.y){
            boy3.scale  =2;
          }
          if(dad1.y<pallet.y){
            dad1.scale = 2;
          }
          if(dad2.y<pallet.y){
            dad2.scale = 2;
          }
          if(dad3.y<pallet.y){
            dad3.scale = 2;
          }

          if(dad1.y<pallet.y&&boy1.y<pallet.y||dad1.y<pallet.y&&boy2.y<pallet.y||dad1.y<pallet.y&&boy3.y<pallet.y||dad2.y<pallet.y&&boy1.y<pallet.y||dad2.y<pallet.y&&boy2.y<pallet.y||dad2.y<pallet.y&&boy3.y<pallet.y||dad3.y<pallet.y&&boy1.y<pallet.y||dad3.y<pallet.y&&boy2.y<pallet.y||dad3.y<pallet.y&&boy3.y<pallet.y){
            removeSprite(pallet)
            removeSprite(sep)
            x = 3;
            z = 2;


 



            console.log("hi")
            let floor;
floor = createSprite(width/2,height/1.05,width,10);
floor.visible = false;
boy1.collide(floor)
boy2.collide(floor)
boy3.collide(floor)
dad1.collide(floor)
dad2.collide(floor)
dad3.collide(floor)

            greeting.visible =true;
            

            son_scope = createSprite(width/4,height/12,width/2,height/7);
            son_scope.shapeColor = "white"

            dad_scope = createSprite(width/1.3,height/12,width/2,height/7);
            // dad_scope.shapeColor = "black"
            greeting.depth = dad_scope.depth+1;

           
if(mousePressedOver(greeting)){
  greeting.y =height/2
  greeting.x = width/2;
  greeting.scale = n = n+0.5;
  dad_scope.x = dad_scope.x-50;
}
canvas.scale = 2.2;
canvas.y = height/2;
          }
  }
  //let's now dive into appstage sCENE2
  if(appStage===SCENE2){

    background(two);
x = 2
    removeSprite(window1);
    removeSprite(window2);
    removeSprite(window3);
    removeSprite(hanger1);
    removeSprite(hanger2);
    removeSprite(hanger3);

    // canvas.visible=true;
pallet.visible =true;
sep.visible =true;
 boy1.visible =true; 
 boy2.visible=true;
 boy3.visible =true;
dad1.visible =true;
dad2.visible =true;
dad3.visible =true;

if(mousePressedOver(boy1)){
  removeSprite(boy2);
  removeSprite(boy3)
  bound1.x = boy1.x+150;
  bound1.y = boy1.y-80;
boy1.y = mouseY;
boy1.x = mouseX;
}

if(mousePressedOver(boy2)){
  removeSprite(boy1);
  removeSprite(boy3)
  bound1.x = boy2.x+150;
  bound1.y = boy2.y-80;
  boy2.y = mouseY;
  boy2.x = mouseX;
  }

  if(mousePressedOver(boy3)){
    removeSprite(boy1);
    removeSprite(boy2)
    bound1.x = boy3.x+150;
  bound1.y = boy3.y-80;
    boy3.y = mouseY;
    boy3.x = mouseX;
    }

    if(mousePressedOver(dad1)){
      dad1.y = mouseY;
      dad1.x = mouseX;
      bound2.x = dad1.x-150;
        bound2.y = dad1.y-80;
      removeSprite(dad3);
  removeSprite(dad2)
      }

      if(mousePressedOver(dad2)){
        removeSprite(dad3);
        removeSprite(dad1)
        bound2.x = dad2.x-150;
        bound2.y = dad2.y-80;
        dad2.y = mouseY;
        dad2.x = mouseX;
        }

        if(mousePressedOver(dad3)){
          removeSprite(dad1);
          removeSprite(dad2)
          bound2.x = dad3.x-150;
        bound2.y = dad3.y-80;
          dad3.y = mouseY;
          dad3.x = mouseX;
          }

          if(boy1.y<pallet.y){
            boy1.scale  =2;
          }

          if(boy2.y<pallet.y){
            boy2.scale  =0.3;
          }
          if(boy3.y<pallet.y){
            boy3.scale  =2;
          }
          if(dad1.y<pallet.y){
            dad1.scale = 2;
          }
          if(dad2.y<pallet.y){
            dad2.scale = 2;
          }
          if(dad3.y<pallet.y){
            dad3.scale = 2;
          }

          if(dad1.y<pallet.y&&boy1.y<pallet.y||dad1.y<pallet.y&&boy2.y<pallet.y||dad1.y<pallet.y&&boy3.y<pallet.y||dad2.y<pallet.y&&boy1.y<pallet.y||dad2.y<pallet.y&&boy2.y<pallet.y||dad2.y<pallet.y&&boy3.y<pallet.y||dad3.y<pallet.y&&boy1.y<pallet.y||dad3.y<pallet.y&&boy2.y<pallet.y||dad3.y<pallet.y&&boy3.y<pallet.y){
            removeSprite(pallet)
            removeSprite(sep)
            x = 3;
            z = 2;


 



            console.log("hi")
            let floor;
floor = createSprite(width/2,height/1.05,width,10);
floor.visible = false;
boy1.collide(floor)
boy2.collide(floor)
boy3.collide(floor)
dad1.collide(floor)
dad2.collide(floor)
dad3.collide(floor)

            greeting.visible =true;
            

            son_scope = createSprite(width/4,height/12,width/2,height/7);
            son_scope.shapeColor = "white"

            dad_scope = createSprite(width/1.3,height/12,width/2,height/7);
            // dad_scope.shapeColor = "black"
            greeting.depth = dad_scope.depth+1;

           
if(mousePressedOver(greeting)){
  greeting.y =height/2
  greeting.x = width/2;
  greeting.scale = n = n+0.5;
  dad_scope.x = dad_scope.x-50;
}
canvas.scale = 2.2;
canvas.y = height/2;
          }
  }
  //OK appstage `Scene3' has came ,we have to see it
  if(appStage===SCENE3){

    background(one);
x = 2
    removeSprite(window1);
    removeSprite(window2);
    removeSprite(window3);
    removeSprite(hanger1);
    removeSprite(hanger2);
    removeSprite(hanger3);

    // canvas.visible=true;
pallet.visible =true;
sep.visible =true;
 boy1.visible =true; 
 boy2.visible=true;
 boy3.visible =true;
dad1.visible =true;
dad2.visible =true;
dad3.visible =true;

if(mousePressedOver(boy1)){
  removeSprite(boy2);
  removeSprite(boy3)
  bound1.x = boy1.x+150;
  bound1.y = boy1.y-80;
boy1.y = mouseY;
boy1.x = mouseX;
}

if(mousePressedOver(boy2)){
  removeSprite(boy1);
  removeSprite(boy3)
  bound1.x = boy2.x+150;
  bound1.y = boy2.y-80;
  boy2.y = mouseY;
  boy2.x = mouseX;
  }

  if(mousePressedOver(boy3)){
    removeSprite(boy1);
    removeSprite(boy2)
    bound1.x = boy3.x+150;
  bound1.y = boy3.y-80;
    boy3.y = mouseY;
    boy3.x = mouseX;
    }

    if(mousePressedOver(dad1)){
      dad1.y = mouseY;
      dad1.x = mouseX;
      bound2.x = dad1.x-150;
        bound2.y = dad1.y-80;
      removeSprite(dad3);
  removeSprite(dad2)
      }

      if(mousePressedOver(dad2)){
        removeSprite(dad3);
        removeSprite(dad1)
        bound2.x = dad2.x-150;
        bound2.y = dad2.y-80;
        dad2.y = mouseY;
        dad2.x = mouseX;
        }

        if(mousePressedOver(dad3)){
          removeSprite(dad1);
          removeSprite(dad2)
          bound2.x = dad3.x-150;
        bound2.y = dad3.y-80;
          dad3.y = mouseY;
          dad3.x = mouseX;
          }

          if(boy1.y<pallet.y){
            boy1.scale  =2;
          }

          if(boy2.y<pallet.y){
            boy2.scale  =0.3;
          }
          if(boy3.y<pallet.y){
            boy3.scale  =2;
          }
          if(dad1.y<pallet.y){
            dad1.scale = 2;
          }
          if(dad2.y<pallet.y){
            dad2.scale = 2;
          }
          if(dad3.y<pallet.y){
            dad3.scale = 2;
          }

          if(dad1.y<pallet.y&&boy1.y<pallet.y||dad1.y<pallet.y&&boy2.y<pallet.y||dad1.y<pallet.y&&boy3.y<pallet.y||dad2.y<pallet.y&&boy1.y<pallet.y||dad2.y<pallet.y&&boy2.y<pallet.y||dad2.y<pallet.y&&boy3.y<pallet.y||dad3.y<pallet.y&&boy1.y<pallet.y||dad3.y<pallet.y&&boy2.y<pallet.y||dad3.y<pallet.y&&boy3.y<pallet.y){
            removeSprite(pallet)
            removeSprite(sep)
            x = 3;
            z = 2;


 



            console.log("hi")
            let floor;
floor = createSprite(width/2,height/1.05,width,10);
floor.visible = false;
boy1.collide(floor)
boy2.collide(floor)
boy3.collide(floor)
dad1.collide(floor)
dad2.collide(floor)
dad3.collide(floor)

            greeting.visible =true;
            

            son_scope = createSprite(width/4,height/12,width/2,height/7);
            son_scope.shapeColor = "white"

            dad_scope = createSprite(width/1.3,height/12,width/2,height/7);
            // dad_scope.shapeColor = "black"
            greeting.depth = dad_scope.depth+1;
           
if(mousePressedOver(greeting)){
  greeting.y =height/2
  greeting.x = width/2;
  greeting.scale = n = n+0.5;
  dad_scope.x = dad_scope.x-50;
}
canvas.scale = 2.2;
canvas.y = height/2;
          }
  }

 drawSprites();

 if(z===2){
  //  making the input boxes and sliders visible by changing their position
  input.position(width/6,65);
  input2.position(width/1.5,65);

slider.position(width/20,height/12);
slider2.position(width/1.2,height/12);

  //getting the values from the input/text boxes
 const text1 = input.value();
 const text2 = input2.value();
 let val = slider.value();
 let val2 = slider2.value();

 textSize(20);
 // making both inputs visible
 fill("black")
 text("Son's Dilouges",width/5.8,40)
 fill("white")
 text("Dad's Dilouges",width/1.45,40)
 
 //naming the input boxes for the user
  textSize(val);
  fill("black")
   text(text1,bound1.x/1.2,bound1.y);
   textSize(val2)
   text(text2,bound2.x-width/23,bound2.y);
   textSize(20);
   text("Text Size: "+val,width/20,height/13);
   text("Text Size: "+val2,width/1.2,height/13);

 }

 if(x === 2){
   //getting the UI more understandable for the use
 textStyle("bold")
 textSize(50)
 fill("black")
 text("Add Characters👨‍👦",width/3.5,height/10)
 }
 
}
/* That's all ,  Tahank you for this wonderful project🙇‍♀️🙇‍♀️*/
