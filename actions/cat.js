import { createReadStream } from 'fs';
import { directory } from '../directory.js';
import path from 'path';

export const cat = async (pathToFile) => {
  const dir = directory();

  return new Promise((resolve, reject) => {
    const readableStream = createReadStream(path.resolve(dir, pathToFile), {
      encoding: 'utf-8',
    });

    readableStream.on('error', (error) => {
      reject(error);
    });

    readableStream.on('data', (chunk) => {
      console.log(chunk);
    });

    readableStream.on('end', () => {
      resolve();
    });
  });
};
