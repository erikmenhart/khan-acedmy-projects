fill(0, 0, 0);
ellipse(200, 200, 375, 375);

var answer = floor(random(1, 5)); 
if (answer === 1) {
    fill(255, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);     text("YES \n", 176, 200);
}else if (answer === 2) {
    fill(255, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);  text(" \n Nope", 176, 200);
  }else if (answer === 3) {
    
    fill(255, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255); text(" \n maybe", 176, 200);
}else if (answer === 4) {
    
    fill(255, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255); text("Obviously", 176, 200);
    
}
