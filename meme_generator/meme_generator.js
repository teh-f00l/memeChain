var input1,input2, image,img

var input1,input2, image,img

function setup() {
  createCanvas(500,500);
  input1 = createInput();
  input1.position(20, 65);
  input2 = createInput();
  input2.position(width/4, height*3/height/4);
  img = createInput()
  img.position(width/2,height/2)
  image=createImg(img);
  

}


function draw() {

  text(input1.value(), 10, 30);
  text(input2.value(), 200, 90);
  if (mouseIsPressed){
    fill(0);
    ellipse(mouseX,mouseY,10,10);
  } else {
    noFill(255);
    
  }
  
  
  
}
