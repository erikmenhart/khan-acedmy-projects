var bodyX = 200;
var bodyY = 250;
var bodyW = 300;
var bodyH = bodyW/2;
var mouthX = 50;
var mouthY =29;

draw = function() {
    mouthX=mouthX+0.2;
    mouthY=mouthY+0.2;
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 300); // body?
    ellipse(bodyX, bodyY-190, bodyH, 100); // face?
    
    fill(0, 0, 0);
    ellipse(bodyX+20,bodyY-200,10,15);
    ellipse(bodyX-20,bodyY-200,10,15);
    
    ellipse(bodyX,bodyY-170,mouthX,mouthY);
    
    fill(224, 221, 143);
    ellipse(bodyX+60,bodyY-40,80,40);
        ellipse(bodyX-60,bodyY-40,80,40);
        ellipse(bodyX+60,bodyY+90,40,80);
        ellipse(bodyX-60,bodyY+90,40,80);
        

};
