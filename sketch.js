
function setup(){
	createCanvas(windowWidth,windowHeight);
}
function draw(){
	b=random(0,255);
	g=0;
	r=random(0,255);
	background(0);
	stroke(255);
	strokeWeight(3);
	for(var x=0;x<=mouseX;x=x+50){
for(var y=0;y<=width;y=y+50){
	ellipse(x,y,25,25);
	fill(r,g,b);
}
}
}
