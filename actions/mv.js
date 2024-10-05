import { cp } from './cp.js';
import { rm } from './rm.js';

export const mv = async (pathToFile, pathToNewDirectory) => {
  await cp(pathToFile, pathToNewDirectory);
  await rm(pathToFile);
};
