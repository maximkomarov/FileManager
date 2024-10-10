import { createReadStream, createWriteStream, promises as fs } from 'fs';
import { directory } from '../directory.js';
import path from 'path';

export const cp = async (pathToFile, pathToNewDirectory) => {
  return new Promise(async (resolve, reject) => {
    const realPathToFile = path.resolve(directory(), pathToFile);
    const realPathToNewDirectory = path.resolve(
      directory(),
      pathToNewDirectory
    );

    try {
      await fs.access(realPathToNewDirectory, fs.constants.F_OK);
      reject('Invalid operation');
    } catch {
      const readableStream = createReadStream(realPathToFile, {
        encoding: 'utf-8',
      });
      const writableStream = createWriteStream(realPathToNewDirectory, {
        encoding: 'utf-8',
      });

      readableStream.on('error', (error) => {
        reject(error);
      });

      writableStream.on('error', (error) => {
        reject(error);
      });

      writableStream.on('finish', () => {
        resolve();
      });

      readableStream.pipe(writableStream);
    }
  });
};
