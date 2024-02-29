function circleArea(r) {
  // Alanı hesaplamak için pi sayısını kullanın
  const pi = Math.PI;
  // Alan formülü: π * r^2
  const result = pi * Math.pow(r, 2);
  return result;
}

function circleCircumference(r) {
  // Çevreyi hesaplamak için pi sayısını kullanın
  const pi = Math.PI;
  // Çevre formülü: 2 * π * r
  const result = 2 * pi * r;
  return result;
}

module.exports = { circleArea, circleCircumference };
