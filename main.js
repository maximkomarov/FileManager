import { commandsParser } from './commandsParser.js';
import readline from 'readline/promises';
import { directory } from './directory.js';
import { consoleOutput } from './consoleOutput.js';

const cliReader = readline.createInterface({
  prompt: `Please, enter your command here: `,
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  console.log(`You are currently in ${directory()}`);
  cliReader.prompt();
  cliReader
    .on('line', async (line) => {
      await commandsParser(line.trim());
      console.log(`You are currently in ${directory()}`);
      cliReader.prompt();
    })
    .on('close', () => {
      console.log('');
      process.exit(0);
    });
};

main();
