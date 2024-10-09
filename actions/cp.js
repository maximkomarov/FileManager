import { createReadStream, createWriteStream } from 'fs';
import { directory } from '../directory.js';
import path from 'path';

export const cp = async (pathToFile, pathToNewDirectory) => {
  return new Promise((resolve, reject) => {
    const realPathToFile = path.resolve(directory(), pathToFile);
    const realPathToNewDirectory = path.resolve(
      directory(),
      pathToNewDirectory
    );

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
    readableStream.on('data', (chunk) => {
      writableStream.write(chunk);
    });
    readableStream.on('end', () => {
      writableStream.end();
    });
    writableStream.on('finish', () => {
      resolve();
    });
  });
};
