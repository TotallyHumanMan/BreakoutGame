var targets = [];
var targetz = [];
var targetr = [];
var bullet;
var player;
var score = 0;
var life1 = 650;
var life2 = 680;
var life3 = 710;
var life4 = 740;
var life5 = 770;
function setup() {
	createCanvas(800, 500);
	bullet = new Bullet();
	player = new Player();
	for (var i = 0; i < 8; i++){
		targets[i] = new Target(i*100, 50);
	}
	for (var j = 0; j < 8; j++){
		targetz[j] = new Target(j*100, 90);
	}
	for (var k = 0; k < 8; k++){
		targetr[k] = new Target(k*100, 130);
	}
}
function draw() {
  background(0);
  fill(255);
  ellipse(life1, 25, 15);
  ellipse(life2, 25, 15);
  ellipse(life3, 25, 15);
  ellipse(life4, 25, 15);
  ellipse(life5, 25, 15);
  for (var i = 0; i < targets.length; i++){
		targets[i].show(100, 200, 255);
	}
	for (var j = 0; j < targetz.length; j++){
		targetz[j].show(100, 255, 150);
	}
	for (var k = 0; k < targetr.length; k++){
		targetr[k].show(255, 150, 200);
	}
	bullet.show();
	player.show();

	textSize(30);
	fill(200, 255, 150);
	text("Score: ", 30, 30);
	text(score, 130, 30);
	if((score == 240) || (score == 480) || (score == 720)){
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
	}
