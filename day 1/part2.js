const fs = require('fs');
const inputs = fs.readFileSync('./day 1/input.txt', 'utf8').split('\n').map(x => parseInt(x, 10));
for (var i = 0; i < inputs.length; i++) {
  for (var j = i + 1; j < inputs.length; j++) {
    for (var k = j + 1; k < inputs.length; k++) {
      if (inputs[i] + inputs[j] + inputs[k] === 2020) {
        console.log(inputs[i] * inputs[j] * inputs[k]);
        break;
      }
    }
  }
}
