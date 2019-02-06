function Target(x, y){
	this.x = x;
	this.y = y;
	
	this.show = function(x,y,z){
	fill(x, y, z);
	stroke(255);
	rect(this.x, this.y, 100, 20, 5);
	}
}

