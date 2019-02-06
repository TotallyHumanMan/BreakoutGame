var player;
function Bullet(){
	xspeed = 10;
	yspeed = -10;
	this.x = 400;
	this.y = 250;
	this.r = 15;
	player = new Player();

	this.show = function(){
		fill (255);
		this.x = this.x + xspeed;
		this.y = this.y + yspeed;
		ellipse(this.x, this.y, this.r);
		if((this.x < 12.5) || (this.x > width - 12.5)){
			xspeed = xspeed * -1;
		} else if (this.y < 12.5) {
			yspeed = yspeed * -1;
		} else if ((this.y >= 440) && (this.y <= 450) && (this.x >= player.x) && (this.x <= player.x + 120)){
			yspeed = yspeed * -1;
		} else if (this.y > 520){
			if(life5 == 1000){
				score = 0;
				life1 = 650;
				life2 = 680;
				life3 = 710;
				life4 = 740;
				life5 = 770;
				targets[0].x = 0;
				targets[1].x = 100;
				targets[2].x = 200;
				targets[3].x = 300;
				targets[4].x = 400;
				targets[5].x = 500;
				targets[6].x = 600;
				targets[7].x = 700;
				targetz[0].x = 0;
				targetz[1].x = 100;
				targetz[2].x = 200;
				targetz[3].x = 300;
				targetz[4].x = 400;
				targetz[5].x = 500;
				targetz[6].x = 600;
				targetz[7].x = 700;
				targetr[0].x = 0;
				targetr[1].x = 100;
				targetr[2].x = 200;
				targetr[3].x = 300;
				targetr[4].x = 400;
				targetr[5].x = 500;
				targetr[6].x = 600;
				targetr[7].x = 700;
			}
			if(life4 == 1000){
				life5 = 1000;
			}
			if(life3 == 1000){
				life4 = 1000;
			}
			if(life2 == 1000){
				life3 = 1000;
			}
			if(life1 == 1000){
				life2 = 1000;
			}
			if(life1 == 650){
				life1 = 1000;
			}
			this.y = 250;
			this.x = 400;
			xspeed = 10;
			yspeed = -10;
		} 
		if ((((this.y <= 80) && (this.y >= 70)) || (((this.y >= 60) && (this.y <= 65)) && (yspeed == 10))) && (this.x >= targets[0].x) && (this.x <= targets[0].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targets[0].x = 1000;
		} 
		if ((((this.y <= 80) && (this.y >= 70)) || (((this.y >= 60) && (this.y <= 65)) && (yspeed == 10))) && (this.x >= targets[1].x) && (this.x <= targets[1].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targets[1].x = 1000;
		} 
		if ((((this.y <= 80) && (this.y >= 70)) || (((this.y >= 60) && (this.y <= 65)) && (yspeed == 10))) && (this.x >= targets[2].x) && (this.x <= targets[2].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targets[2].x = 1000;
		} 
		if ((((this.y <= 80) && (this.y >= 70)) || (((this.y >= 60) && (this.y <= 65)) && (yspeed == 10))) && (this.x >= targets[3].x) && (this.x <= targets[3].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targets[3].x = 1000;
		} 
		if ((((this.y <= 80) && (this.y >= 70)) || (((this.y >= 60) && (this.y <= 65)) && (yspeed == 10))) && (this.x >= targets[4].x) && (this.x <= targets[4].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targets[4].x = 1000;
		} 
		if ((((this.y <= 80) && (this.y >= 70)) || (((this.y >= 60) && (this.y <= 65)) && (yspeed == 10))) && (this.x >= targets[5].x) && (this.x <= targets[5].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targets[5].x = 1000;
		} 
		if ((((this.y <= 80) && (this.y >= 70)) || (((this.y >= 60) && (this.y <= 65)) && (yspeed == 10))) && (this.x >= targets[6].x) && (this.x <= targets[6].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targets[6].x = 1000;
		} 
		if ((((this.y <= 80) && (this.y >= 70)) || (((this.y >= 60) && (this.y <= 65)) && (yspeed == 10))) && (this.x >= targets[7].x) && (this.x <= targets[7].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targets[7].x = 1000;
		} 
		

		if ((((this.y <= 120) && (this.y >= 110)) || (((this.y >= 100) && (this.y <= 105)) && (yspeed == 10))) && (this.x >= targetz[0].x) && (this.x <= targetz[0].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetz[0].x = 1000;
		} 
		if ((((this.y <= 120) && (this.y >= 110)) || (((this.y >= 100) && (this.y <= 105)) && (yspeed == 10))) && (this.x >= targetz[1].x) && (this.x <= targetz[1].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetz[1].x = 1000;
		} 
		if ((((this.y <= 120) && (this.y >= 110)) || (((this.y >= 100) && (this.y <= 105)) && (yspeed == 10))) && (this.x >= targetz[2].x) && (this.x <= targetz[2].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetz[2].x = 1000;
		} 
		if ((((this.y <= 120) && (this.y >= 110)) || (((this.y >= 100) && (this.y <= 105)) && (yspeed == 10))) && (this.x >= targetz[3].x) && (this.x <= targetz[3].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetz[3].x = 1000;
		} 
		if ((((this.y <= 120) && (this.y >= 110)) || (((this.y >= 100) && (this.y <= 105)) && (yspeed == 10))) && (this.x >= targetz[4].x) && (this.x <= targetz[4].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetz[4].x = 1000;
		} 
		if ((((this.y <= 120) && (this.y >= 110)) || (((this.y >= 100) && (this.y <= 105)) && (yspeed == 10))) && (this.x >= targetz[5].x) && (this.x <= targetz[5].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetz[5].x = 1000;
		} 
		if ((((this.y <= 120) && (this.y >= 110)) || (((this.y >= 100) && (this.y <= 105)) && (yspeed == 10))) && (this.x >= targetz[6].x) && (this.x <= targetz[6].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetz[6].x = 1000;
		} 
		if ((((this.y <= 120) && (this.y >= 110)) || (((this.y >= 100) && (this.y <= 105)) && (yspeed == 10))) && (this.x >= targetz[7].x) && (this.x <= targetz[7].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetz[7].x = 1000;
		} 

		if ((((this.y <= 160) && (this.y >= 150)) || (((this.y >= 140) && (this.y <= 145)) && (yspeed == 10))) && (this.x >= targetr[0].x) && (this.x <= targetr[0].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetr[0].x = 1000;
		} 
		if ((((this.y <= 160) && (this.y >= 150)) || (((this.y >= 140) && (this.y <= 145)) && (yspeed == 10))) && (this.x >= targetr[1].x) && (this.x <= targetr[1].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetr[1].x = 1000;
		} 
		if ((((this.y <= 160) && (this.y >= 150)) || (((this.y >= 140) && (this.y <= 145)) && (yspeed == 10))) && (this.x >= targetr[2].x) && (this.x <= targetr[2].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetr[2].x = 1000;
		} 
		if ((((this.y <= 160) && (this.y >= 150)) || (((this.y >= 140) && (this.y <= 145)) && (yspeed == 10))) && (this.x >= targetr[3].x) && (this.x <= targetr[3].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetr[3].x = 1000;
		} 
		if ((((this.y <= 160) && (this.y >= 150)) || (((this.y >= 140) && (this.y <= 145)) && (yspeed == 10))) && (this.x >= targetr[4].x) && (this.x <= targetr[4].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetr[4].x = 1000;
		} 
		if ((((this.y <= 160) && (this.y >= 150)) || (((this.y >= 140) && (this.y <= 145)) && (yspeed == 10))) && (this.x >= targetr[5].x) && (this.x <= targetr[5].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetr[5].x = 1000;
		}
		if ((((this.y <= 160) && (this.y >= 150)) || (((this.y >= 140) && (this.y <= 145)) && (yspeed == 10))) && (this.x >= targetr[6].x) && (this.x <= targetr[6].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetr[6].x = 1000;
		} 
		if ((((this.y <= 160) && (this.y >= 150)) || (((this.y >= 140) && (this.y <= 145)) && (yspeed == 10))) && (this.x >= targetr[7].x) && (this.x <= targetr[7].x + 100)){
			yspeed = yspeed * -1;
			score = score + 10;
			targetr[7].x = 1000;
		} 
	}
}