function Player(){
	this.x = 325
  	this.show = function(){
  		fill(255, 200, 100); 
  		rect(this.x, 450, 120, 15, 20);
  	if (keyIsDown(LEFT_ARROW)){
		this.x -= 20;
	} else if (keyIsDown(RIGHT_ARROW)){
		this.x += 20;
	}
	if(this.x <= 4){
  		this.x = 0;
	  } else if(this.x >= 676){
	  	this.x = 680;
	  }
  	}

}