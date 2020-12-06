var dog;
var firebase,database; 
var dogImg,foodS
function preload()
{
  dogImg = loadImage("images/dogImg.png")
  dogImg1 = loadImage("images/dogImg1.png")
  
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);

  foodStock = database.ref('food');
  foodStock.on('value', readStock);

}

function draw(){
  background("green");
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}


function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x <=0){
     x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })

}