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
  const s = new Set(numbers);
  console.log(s.size);
};
