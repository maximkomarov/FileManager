import fs from 'fs/promises';
import path from 'path';
import { directory } from '../directory.js';

export const rn = async (filePath, newName) => {
  const realFilePath = path.resolve(directory(), filePath);
  let filePathArray = realFilePath.split(path.sep);
  filePathArray.pop();
  const newFileNamePath = filePathArray.join(path.sep) + path.sep + newName;
  try {
    await fs.access(newFileNamePath, fs.constants.F_OK);
    console.log('Invalid operation');
  } catch {
    await fs.rename(realFilePath, newFileNamePath);
  }
};
