import { createReadStream } from 'fs';

export const cat = async (path) => {
  return new Promise((resolve, reject) => {
    const readableStream = createReadStream(path, { encoding: 'utf-8' });

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
