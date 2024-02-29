const circleArea = require("./circleArea.js").circleArea;
const circleCircumference = require("./circleArea.js").circleCircumference;
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("enter radius:", (radius) => {
  console.log("input radius :", radius);
  console.log("area: ", circleArea(radius));
  console.log("circumference: ", circleCircumference(radius));
  r1.close();
});
