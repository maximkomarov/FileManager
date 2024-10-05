import fs from 'fs/promises';
import path from 'path';

export const rn = async (filePath, newName) => {
  let filePathArray = filePath.split(path.sep);
  filePathArray.pop();
  const newFileNamePath = filePathArray.join(path.sep) + path.sep + newName;
  await fs.rename(filePath, newFileNamePath);
};
