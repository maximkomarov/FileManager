import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';

export const decompress = async (pathToFile, pathToDestination) => {
  const brotli = createBrotliDecompress();
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToDestination);

  try {
    await pipeline(source, brotli, destination);
  } catch (err) {
    console.error('An error occurred:', err);
  }
};
