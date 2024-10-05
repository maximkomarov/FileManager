import fs from 'fs';
import crypto from 'crypto';

export const hash = async (pathTOfile) => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(pathTOfile);
    stream.on('data', (data) => hash.update(data));
    stream.on('error', (error) => reject(error));
    stream.on('end', () => {
      console.log(hash.digest('hex'));
      resolve();
    });
  });
};
