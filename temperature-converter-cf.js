function CFConverter(temperature) {
  let tf = (9.0 / 5.0) * temperature + 32;
  return tf;
}

function findAreaOfSquare(side) {
  return side * side;
}

function findPerimeterOfSquare(side) {
  return 4 * side;
}

function calculateSI(p, r, t) {
  return (p * t * r) / 100;
}
