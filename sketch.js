function setup() {
  createCanvas(100, 100, WEBGL);

  background(200);

  // Use 6 vertices.
  ellipse(0, 0, 80, 40, 6);

  describe('A white hexagon on a gray canvas.', LABEL);
}