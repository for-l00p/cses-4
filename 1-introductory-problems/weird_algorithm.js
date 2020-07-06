const readline = require('readline');

const print = (args) => process.stdout.write(args);

const r = readline.createInterface({ input: process.stdin, terminal: false }).on('line', (line) => {
  const n = parseInt(line);
  run(n);
  r.close();
});

const run = (n) => {
  while (n != 1) {
    print(n + ' ');
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
  print(n + '\n');
};
