function lerp(a, b, alpha) {
  return a + (b - a) * alpha;
}

function mapRange(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

export { lerp, mapRange };
