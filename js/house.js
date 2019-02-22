var Y = 0;
background(219,255,255);

fill(36,79,6);
triangle(200,28,350,150,50,150);

fill(84,77,11);
rect(60,150,280,207);

fill(32,54,3);
rect(180,280,40,85);

var grass = getImage("cute/GrassBlock");
while (Y<380){
    Y+=20;
    image(grass,0,344,Y++,59);
}
fill(205, 235, 12);
ellipse(212,317,15,15);

for (var i =0;i<2; i++){
    var images = getImage("cute/WindowTall");
image (images,(i*160+90), (200), 62,72);
}
