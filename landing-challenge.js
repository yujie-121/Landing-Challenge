function setup() {
  createCanvas(700, 620);
  frameRate(30);
}
function rocket(x, y) {
  translate(x, y);
  strokeWeight(3);
  //ejector
  fill(125, 125, 125);
  rect(105, 170, 40, 20, 40);
  // body of rocket
  fill(255, 255, 255);
  rect(100, 100, 50, 82);
  //window of rocket
  fill(95, 158, 160);
  ellipse(125, 125, 30);

  //head of rocket
  fill(165, 42, 42);
  triangle(100, 100, 125, 60, 150, 100);
  //line
  push();
  fill(0, 0, 0);
  strokeWeight(6);
  line(125, 180, 125, 158);
  pop();
  //wings
  fill(25, 25, 112);
  triangle(98, 150, 80, 185, 98, 182);
  triangle(152, 150, 170, 185, 152, 182);
}
function spittingFire() {
  //red fire
  fill(255, 0, 0);
  beginShape();
  vertex(115, 190);
  bezierVertex(125, 230, 125, 230, 135, 190);
  endShape();
  //yellow fire
  fill(255, 165, 0);
  beginShape();
  vertex(120, 190);
  bezierVertex(125, 210, 125, 210, 130, 190);
  endShape();
}
function groundAndSky() {
  push();
  noStroke();
  fill(0, 128, 0);
  rect(0, 550, width, 60);
  fill(173, 216, 230);
  rect(0, 0, width, 550);
  pop();
}
function redGround() {
  push();
  noStroke();
  fill(165, 42, 42);
  rect(80, 500, 60, 50);
  pop();
}
function blueGround() {
  push();
  noStroke();
  fill(25, 25, 112);
  rect(450, 520, 150, 30);
  pop();
}
function gameOver() {
  push();
  resetMatrix(); // resets the origin of the coordinate system to (0,0)
  fill(255, 255, 255);
  textSize(65);
  text("GAME OVER", 150, 200);
  pop();
}
function winPageForRedGround() {
  push();
  resetMatrix();
  fill(255, 255, 255);
  textSize(65);
  text("YOU WIN", 200, 200);
  let hardModeText = "WIN THE HARD MODE!";
  fill(165, 42, 42);
  textSize(26);
  text(hardModeText, 210, 250);
  pop();
}
function winPageForBlueGround() {
  push();
  resetMatrix();
  fill(255, 255, 255);
  textSize(65);
  text("YOU WIN", 200, 200);
  let hardModeText = "WIN THE EASY MODE!";
  fill(25, 25, 112);
  textSize(26);
  text(hardModeText, 210, 250);
  pop();
}
function winPageForGrass() {
  push();
  resetMatrix();
  fill(255, 255, 255);
  textSize(65);
  text("YOU WIN", 200, 200);
  let noteText = "You can click button to try landing to other ground!";
  fill(47, 79, 79);
  textSize(16);
  text(noteText, 160, 250);
  pop();
}

function startScreen() {
  push();
  translate(0, 0);
  let noteText = "Press down the SPACE key to decelerate! ";
  fill(97, 79, 79);
  textSize(18);
  text(noteText, 170, 230);
  let note1Text = "LEFT and RIGHT key to moving! ";
  fill(97, 79, 79);
  textSize(18);
  text(note1Text, 190, 280);

  fill(47, 79, 79);
  textSize(40);
  text("Smoothly Landing Challenge ", 80, 150);
  push();
  fill(255, 140, 0);
  textSize(30);
  text("⚠", 130, 230);
  pop();
  pop();
}
function startButton() {
  push();
  translate(0, 0);
  strokeWeight(3);
  push();
  stroke(70, 130, 180);
  fill(173, 216, 230);
  rect(217, 350, 200, 70, 30);
  pop();
  let startText = "Click start";
  fill(255, 255, 255);
  textSize(38);
  text(startText, 227, 400);
  pop();
}
function mouseClicked() {
  if (mouseX > 217 && mouseX < 217 + 200 && mouseY > 350 && mouseY < 350 + 70) {
    state = "game";
  }
  if (mouseX > 243 && mouseX < 243 + 205 && mouseY > 290 && mouseY < 290 + 70) {
    gameActive = true;
    rocketX = 200;
    rocketY = -200;
    gravity = 10;
    acceleration = 0.2;
  }
}
function reStartButton() {
  push();
  resetMatrix();
  strokeWeight(3);
  push();
  stroke(119, 136, 153);
  fill(176, 196, 222);
  rect(243, 290, 205, 70, 30);
  pop();
  let startText = "Play again";
  fill(255, 255, 255);
  textSize(38);
  text(startText, 255, 340);
  pop();
}

let rocketX = 200;
let rocketY = -200;
let gravity = 10;
let acceleration = 0.2;
let gameActive = true;

let state = "start";

function draw() {
  background(212, 242, 231);

  if (state === "start") {
    startScreen();
    startButton();
  } else if (state === "game") {
    //game screen
    groundAndSky();
    redGround();
    blueGround();
    rocket(rocketX, rocketY);

    if (gameActive) {
      rocketY = rocketY + gravity;
      gravity = gravity + acceleration;
      if (keyIsDown(32)) {
        spittingFire();
        gravity = gravity - 0.8;
      }
      //to redGround
      if (keyIsDown(37)) {
        rocketX = rocketX - 2;
      }
      //to blueGround
      if (keyIsDown(39)) {
        rocketX = rocketX + 2;
      }
    }
    // judgement for redGround
    if (rocketY >= 310 && rocketY <= 315 && rocketX > -45 && rocketX < 13) {
      gameActive = false;
      if (gravity > 7 || (rocketY > 315 && rocketX > -45 && rocketX < 13))
        gameOver();
      else winPageForRedGround();
      reStartButton();
    }

    // judgement for blueGround
    if (rocketY >= 330 && rocketY <= 335 && rocketX > 330 && rocketX < 470) {
      gameActive = false;
      if (gravity > 7) gameOver();
      else winPageForBlueGround();
      reStartButton();
    }

    // for the middle grass
    if (rocketY > 360) {
      gameActive = false;
      if (gravity > 5) gameOver();
      else winPageForGrass();
      reStartButton();
      // the jugement for other middle grass
      if ((rocketX > 13 && rocketX < 200) || (rocketX > 200 && rocketX < 330)) {
        gameActive = false;
        gameOver();
        reStartButton();
      }
    }

    // for other judement for the grass
    if ((rocketX < -47 && rocketY > 360) || (rocketX > 470 && rocketY > 360)) {
      gameActive = false;
      gameOver();
      reStartButton();
    }

    // for if rocket over sreen
    if (rocketY < -200) {
      gameActive = false;
      gameOver();
      reStartButton();
    }
  }
}
