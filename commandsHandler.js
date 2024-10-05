import { cat } from './actions/cat.js';
import { cd } from './actions/cd.js';
import { up } from './actions/up.js';

export const commandsHandler = async (command) => {
  switch (command[0]) {
    case 'up':
      await up();
      break;
    case 'cd':
      await cd(command[1]);
      break;
    case 'ls':
      console.log('ls');
      break;
    case 'cat':
      await cat(command[1]);
      break;
    case 'add':
      console.log('add');
      break;
    case 'rn':
      console.log('rn');
      break;
    case 'cp':
      console.log('cp');
      break;
    case 'mv':
      console.log('mv');
      break;
    case 'rm':
      console.log('rm');
      break;
    case 'os':
      console.log('os');
      break;
    case 'hash':
      console.log('hash');
      break;
    case 'compress':
      console.log('compress');
      break;
    case 'decompress':
      console.log('decompress');
      break;
    case '.exit':
      process.exit(0);
      break;
    default:
      console.log('Invalid command');
  }
};
