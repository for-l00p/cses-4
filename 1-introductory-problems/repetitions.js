const readline = require('readline');

const r = readline.createInterface({ input: process.stdin, terminal: false }).on('line', (line) => {
  const dna = line.split('');
  run(dna);
  r.close();
});

const run = (dna) => {
  let longest = 1;
  let streak = 1;

  dna.reduce((prev, curr) => {
    if (prev === curr) {
      streak += 1;
      longest = Math.max(streak, longest);
    } else {
      streak = 1;
    }
    return curr;
  });

  console.log(longest);
};
