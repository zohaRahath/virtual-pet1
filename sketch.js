var database ,dog,dog1,dog2
var position
//Create variables here

function preload()

{
  dog1=loadImage("images/dogImg.png")
  dog2=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
//	createCanvas(800, 700);
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  dog = createSprite(250,250,10,10);
 dog.addImage(dog1)
 dog.scale=0.2
 

  var dog29 = database.ref('Food');
  dog29.on("value", readPosition, showError);
} 



function draw()
 { background("cyan")

  if(keyDown(UP_ARROW)){
    writePosition(position)
    dog.addImage(dog2)
  }
  drawSprites();
  fill(255,255,254); stroke("black");
   text("Food remaining : "+position,170,200); textSize(13);
   text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
 
  //add styles here

}
function readPosition(data){
  position = data.val();
  console.log(position.x);
  
}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition(nazo){
  if(nazo>0){
    nazo=nazo-1
  }
  else{
    nazo=0
  }
  database.ref('Food').set({
    'Food': nazo
  })

}
