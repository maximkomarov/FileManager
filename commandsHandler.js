import { add } from './actions/add.js';
import { cat } from './actions/cat.js';
import { cd } from './actions/cd.js';
import { up } from './actions/up.js';
import { rn } from './actions/rn.js';
import { cp } from './actions/cp.js';
import { rm } from './actions/rm.js';
import { mv } from './actions/mv.js';
import { osAction } from './actions/os.js';
import { hash } from './actions/hash.js';
import { compress } from './actions/compress.js';
import { decompress } from './actions/decompress.js';
import { ls } from './actions/ls.js';

export const commandsHandler = async (command) => {
  try {
    switch (command[0]) {
      case 'up':
        await up();
        break;
      case 'cd':
        await cd(command[1]);
        break;
      case 'ls':
        await ls();
        break;
      case 'cat':
        await cat(command[1]);
        break;
      case 'add':
        await add(command[1]);
        break;
      case 'rn':
        await rn(command[1], command[2]);
        break;
      case 'cp':
        await cp(command[1], command[2]);
        break;
      case 'mv':
        await mv(command[1], command[2]);
        break;
      case 'rm':
        await rm(command[1]);
        break;
      case 'os':
        await osAction(command[1]);
        break;
      case 'hash':
        await hash(command[1]);
        break;
      case 'compress':
        compress(command[1], command[2]);
        break;
      case 'decompress':
        decompress(command[1], command[2]);
        break;
      case '.exit':
        process.exit(0);
        break;
      default:
        console.log('Invalid command');
    }
  } catch (error) {
    console.error('Operation failed', error);
  }
};
