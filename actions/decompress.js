import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';
import path from 'path';
import { directory } from '../directory.js';

export const decompress = async (pathToFile, pathToDestination) => {
  const realPathToFile = path.resolve(directory(), pathToFile);
  const realPathToDestination = path.resolve(directory(), pathToDestination);
  const brotli = createBrotliDecompress();
  const source = createReadStream(realPathToFile);
  const destination = createWriteStream(realPathToDestination);

  try {
    await pipeline(source, brotli, destination);
  } catch (err) {
    console.error('Operation failed');
  }
};
