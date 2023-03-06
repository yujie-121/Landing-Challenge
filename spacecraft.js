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
function draw() {
  background(255, 255, 255);
  rocket();
  spittingFire();
}
