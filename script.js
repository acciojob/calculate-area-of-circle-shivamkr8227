//your JS code here. If required.
const radius = parseFloat(prompt("Enter the radius of the circle:"));
const area = Math.PI * Math.pow(radius, 2);
const roundedArea = area.toFixed(2);

console.log(`The area of the circle with radius ${radius} is ${roundedArea}`);