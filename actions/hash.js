import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { directory } from '../directory.js';

export const hash = async (pathTofile) => {
  const realPathToFile = path.resolve(directory(), pathTofile);
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(realPathToFile);
    stream.on('data', (data) => hash.update(data));
    stream.on('error', (error) => reject(error));
    stream.on('end', () => {
      console.log(hash.digest('hex'));
      resolve();
    });
  });
};
