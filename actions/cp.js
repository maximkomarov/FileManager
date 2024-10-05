import { createReadStream, createWriteStream } from 'fs';

export const cp = async (pathToFile, pathToNewDirectory) => {
  return new Promise((resolve, reject) => {
    const readableStream = createReadStream(pathToFile, { encoding: 'utf-8' });
    const writableStream = createWriteStream(pathToNewDirectory, {
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
