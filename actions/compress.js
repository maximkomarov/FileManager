import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export const compress = async (pathToFile, pathToDestination) => {
  const brotli = createBrotliCompress();
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToDestination);

  try {
    await pipeline(source, brotli, destination);
  } catch (err) {
    console.error('An error occurred:', err);
  }
};
