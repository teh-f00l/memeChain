function setup() {
  createCanvas(500,500);

}

function draw() {
  text('word', 10, 30);
  text('word', 60, 30);
  if (mouseIsPressed){
    fill(0);
    ellipse(mouseX,mouseY,10,10);
  } else {
    noFill(255);
  }
  
  
}