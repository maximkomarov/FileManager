import fs from 'fs/promises';

export const rm = async (filePath) => {
  await fs.unlink(filePath);
};
