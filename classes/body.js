class Body {
  constructor(m, x, y, vx=0, vy=0, ax=0, ay=0, fx=0, fy=0, s=10) {
    this.m  = m;    // define the mass
    this.x  = x;    // define the coordinates
    this.y  = y;
    this.vx = vx;   // define the speed
    this.vy = vy;
    this.ax = ax;   // define the acceleration
    this.ay = ay;
    this.fx = fx;   // define the force
    this.fy = fy;
    this.s  = s;    // define the size
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  accelerate() {
    this.vx += this.ax;
    this.vy += this.ay;
  }

  force(fx, fy) {
    this.fx = fx;
    this.fy = fy;
    this.ax = this.fx/this.m;
    this.ay = this.fy/this.m;
  }

  display() {
    noStroke();
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.s, this.s);
  }
}
