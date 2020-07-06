const readline = require('readline');

const r = readline.createInterface({ input: process.stdin, terminal: false }).on('line', (line) => {
  run(parseInt(line));
  r.close();
});

const mod = (num) => num % (10 ** 9 + 7);
const updateMod = (r, e) => mod(r * mod(2 ** e));

const run = (n) => {
  const del = 16;
  const times = Math.floor(n / del);
  const remainder = n % del;

  let result = 1;

  for (let i = 0; i < times; i++) {
    result = updateMod(result, del);
  }

  result = updateMod(result, remainder);

  console.log(result);
};
