import { osHomeDir, setDirectory, directory } from '../directory.js';
import fs from 'fs/promises';
import path from 'path';

export const cd = async (cdPath) => {
  try {
    const pathArray = cdPath.split(path.sep);
    if (pathArray[0].toLowerCase() === osHomeDir()) {
      await fs.access(cdPath, fs.constants.F_OK);
      await setDirectory(cdPath);
    } else {
      const currentPath = directory();
      const newPath = currentPath + path.sep + cdPath;
      await fs.access(newPath, fs.constants.F_OK);
      await setDirectory(newPath);
    }
  } catch (error) {
    console.error(`Operation failed`);
  }
};
