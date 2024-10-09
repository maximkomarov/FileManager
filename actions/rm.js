import fs from 'fs/promises';
import { directory } from '../directory.js';
import path from 'path';

export const rm = async (filePath) => {
  const realFIlePath = path.resolve(directory(), filePath);
  await fs.unlink(realFIlePath);
};
