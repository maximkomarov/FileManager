import { osHomeDir, setDirectory } from '../directory.js';
import { directory } from '../directory.js';
import fs from 'fs/promises';
import path from 'path';

export const up = async () => {
  try {
    const currentPath = directory();
    if (currentPath.toLowerCase() === osHomeDir()) {
      return;
    }
    const pathArray = currentPath.split(path.sep);
    pathArray.pop();
    if (pathArray.length === 1) {
      pathArray[0];
    }
    const newPath = pathArray.join(path.sep);
    await fs.access(newPath, fs.constants.F_OK);
    await setDirectory(newPath);
  } catch (error) {
    console.error(`Operation failed`);
  }
};
