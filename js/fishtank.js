background(13, 195, 250);


         
         
draw = function() {
var num1 = random (50,500);
var num2 = random (1, 400);

var col1= random (1, 360);
var col2= random (1, 360);
var col3= random (1, 360);
    
var centerX = num1;
var centerY = num2;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(col1, col2, col3);

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(col3, col1, col2);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
