import fs from 'fs/promises';
import { directory } from '../directory.js';
import path from 'path';

export const add = async (fileName) => {
  const pathToNewFile = path.join(directory(), fileName);
  try {
    await fs.access(pathToNewFile, fs.constants.F_OK);
    console.log('Invalid operation');
  } catch {
    await fs.writeFile(pathToNewFile, '');
  }
};
