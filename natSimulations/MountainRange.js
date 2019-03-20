//blue sky
background(0, 36, 128);
//moon
fill(235, 196, 112);
noStroke();
ellipse(0, 0, 100, 100);

//back range
var drawrange = function() {
    stroke(38, 37, 37);
    var incAmount = 0.01;
    for (var t = 0; t < (incAmount*width)+10; t += incAmount) {
        var n = noise(t);
        var y = map(n, 1.4, 0.55, 0, height/2);
        rect(t*50, height-y, 1, y);
    }
};

//middle range
var drawrange2 = function(){
    stroke(138, 131, 131);
    var incAmount = 0.01;
    for (var t = 0; t < (incAmount*width)+10; t += incAmount) {
        var n = noise(t);
        var y = map(n, 1.8, 0, -6, height/2);
        rect(t*100, height-y, 1, y);
    }
};
//front range
var drawrange3 = function(){
    stroke(179, 177, 177);
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 1.1, -0.5, -4, height/2);
        rect(t*200, height-y, 1, y);
    }
};

//clouds
var drawcloud = function(){
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 1.1, 0.5,4, height/2);
        rect(t*300, 0, 1, y/2);
    }
};

drawrange();
drawrange2();
drawrange3();
drawcloud();
