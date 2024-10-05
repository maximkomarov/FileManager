import os from 'os';
import path from 'path';

let currentDirectory = os.homedir();

export const directory = () => {
  return currentDirectory;
};

export const osHomeDir = () => {
  return os.homedir().split(path.sep)[0].toLowerCase();
};

export const setDirectory = async (path) => {
  currentDirectory = path;
};
