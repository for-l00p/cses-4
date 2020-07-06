const readline = require('readline');

const onLine = (line) => {
  const vals = line.split(' ');
  console.log(parseInt(vals[0]) + parseInt(vals[1]));
  r.close();
};

const r = readline
  .createInterface({ input: process.stdin, output: process.stdout, terminal: false })
  .on('line', onLine);
