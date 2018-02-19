// var input1,input2, image,img

// var input1,input2, image,img

// function setup() {
//   createCanvas(500,500);
//   input1 = createInput();
//   input1.position(20, 65);
//   input2 = createInput();
//   input2.position(width/4, height*3/height/4);
//   img = createInput()
//   img.position(width/2,height/2)
//   image=createImg(img);
  

// }


// function draw() {

//   text(input1.value(), 10, 30);
//   text(input2.value(), 200, 90);
//   if (mouseIsPressed){
//     fill(0);
//     ellipse(mouseX,mouseY,10,10);
//   } else {
//     noFill(255);
    
//   }
  
  
  
// }
var input1,input2, c


function setup() {
  // create canvas
  c = createCanvas(710, 400);
  input1 = createInput('');
  
  input1.position(width*25.5/40, height/2.5);
  input2 = createInput();
  
  input2.position(width/7, height/2.5);
  background(100);
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text('Drag an image file onto the canvas.', width/2, height/2);
  // noLoop();
  // Add an event for when a file is dropped onto the canvas
  
}

function draw() {
  c.drop(gotFile);
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text('bottom text',width/4,height/6)
  text('top text',width*3/4,height/6)
  textSize(30);
  text(input1.value(),width/2,height/4);
  text(input2.value(),width/2,height*3/4);
  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 10, 10);
  } else {
    noFill(255);
  }
}

function gotFile(file) {
  // If it's an image file
  if (file.type === 'image') {
    // Create an image DOM element but don't show it
    var img = createImg(file.data).hide();
    // Draw the image onto the canvas
    image(img, 0, 0, width, height);
  } else {
    println('Not an image file!');
  }
