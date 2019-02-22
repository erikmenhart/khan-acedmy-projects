var xPos = 50;
var yPos = 100;
var xxpos = 447;
var yypos= 434;
var siz = 10;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, siz,siz);
    siz+=1;
    xPos+=1;
    fill(25, 138, 25);
    ellipse(xxpos,yypos,siz-50,siz-50);
    xxpos-=1;
    yypos-=1;
};
