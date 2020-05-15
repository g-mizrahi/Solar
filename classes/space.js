class Space {
  constructor(w, h, v=0, color_r=0, color_g=0, color_b=0) {
    self.w = w;
    self.h = h;
    self.v = v; // define viscosity
    self.color_r = color_r;
    self.color_g = color_g;
    self.color_b = color_b;
  }

  display() {
    noStroke();
    fill(self.color_r, self.color_g, self.color_b); // fill with black
    rect(0, 0, self.w, self.h);
  }
}
