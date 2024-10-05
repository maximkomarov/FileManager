import fs from 'fs/promises';
import { directory } from '../directory.js';
import path from 'path';

export const add = async (fileName) => {
  const currentDirectory = directory();
  await fs.writeFile(currentDirectory + path.sep + fileName, '');
};
