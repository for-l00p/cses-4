const readline = require('readline');

let n;

const r = readline.createInterface({ input: process.stdin, terminal: false }).on('line', (line) => {
  if (!n) {
    n = parseInt(line);
    return;
  }
  const numbers = line.split(' ').map((num) => parseInt(num));
  run(numbers);
  r.close();
});

const run = (numbers) => {
  const target = (n * (n + 1)) / 2;
  const sum = numbers.reduce((sum, val) => sum + val);
  console.log(target - sum);
};
