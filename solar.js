let space;
let sun;

const width  = 1500;
const height = 740;

var g = 10;

var bodies = [];

let stop = true;

function random_int(max) {
  return Math.floor(1 + Math.random() * Math.floor(max-1));
}

function distance(a, b) {
  // compute the distance between two bodies a and b
  return(Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y)));
}

function compute_force(a, b) {
  // compute the gravitational force of body b on body a
  var d    = distance(a, b);
  var norm = Math.min(g*a.m*b.m/(d*d), 50);
  var cos  = (b.x-a.x)/d;
  var sin  = (b.y-a.y)/d;
  return([norm*cos, norm*sin]);
}

function setup() {
  var canvas = createCanvas(width, height);
  for (var i=0; i<10; i++){
    var m    = (i+1)*3;
    var x    = random_int(100)*(width/300)+width/3;
    var y    = random_int(100)*(height/300)+height/3;
    var vx   = random_int(100)/50-1;
    var vy   = random_int(100)/50-1;
    var s    = (i+1)*5;
    var body = new Body(m=m, x=x, y=y, vx=vx, vy=vy, ax=0, ay=0, fx=0, fy=0, s=s);
    bodies.push(body);
  }
  // var big_chungus = new Body(m=1000, x=width/2, y=height/2, vx=0, vy=0, ax=0, ay=0, fx=0, fy=0, s=80);
  // bodies.push(big_chungus);
  space  = new Space(width, height, v=0.01, color_r=0, color_g=0, color_b=0);
  space.display();
  if(stop) noLoop();
  canvas.mousePressed(function() {
    stop = !stop;
    stop ? noLoop() : loop()
  });
}

function draw() {
  space.display(); // draw the background everytime to remove the traces
  // Compute the forces
  var i;
  var j;
  var forces = [];
  for (i=0; i<bodies.length; i++){
    var line = [];
    for (j=0; j<bodies.length; j++){
      line.push(compute_force(bodies[i], bodies[j]));
    }
    forces.push(line);
  }
  // Compute the accelerations
  for (i=0; i<bodies.length; i++){
    var fx = 0;
    var fy = 0;
    for (j=0; j<bodies.length; j++){
      if (i!=j){
        fx += forces[i][j][0];
        fy += forces[i][j][1];
      }
    }
    fx -= bodies[i].vx*v;
    fy -= bodies[i].vy*v;
    bodies[i].force(fx, fy);
  }
  // Compute the speeds
  for (i=0; i<bodies.length; i++){
    bodies[i].accelerate();
  }
  // Compute the positions
  for (i=0; i<bodies.length; i++){
    bodies[i].move();
    if (bodies[i].x>width-bodies[i].s/2){
      bodies[i].vx *= -1;
    }
    if (bodies[i].x<0+bodies[i].s/2){
      bodies[i].vx *= -1;
    }
    if (bodies[i].y>height-bodies[i].s/2){
      bodies[i].vy *= -1;
    }
    if (bodies[i].y<0+bodies[i].s/2){
      bodies[i].vy *= -1;
    }
  }
  // Display the planet
  for (i=0; i<bodies.length; i++){
    bodies[i].display();
  }
}
