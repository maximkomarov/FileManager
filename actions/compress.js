import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { directory } from '../directory.js';

export const compress = async (pathToFile, pathToDestination) => {
  const brotli = createBrotliCompress();
  const realPathToFile = path.resolve(directory(), pathToFile);
  const realPathToDestination = path.resolve(directory(), pathToDestination);
  const source = createReadStream(realPathToFile);
  const destination = createWriteStream(realPathToDestination);

  try {
    await pipeline(source, brotli, destination);
  } catch (err) {
    console.error('Operation failed');
  }
};
